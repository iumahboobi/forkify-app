<?php
// 1. Allow access from any origin (CORS) - Essential for local development
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Database Connection Configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forkify_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "fail", "message" => "Connection failed: " . $conn->connect_error]));
}

// 3. Determine Request Method (GET for reading, POST for creating)
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // --- GET Request Handling ---

    if (isset($_GET['id'])) {
        // A. Get a single recipe by ID
        $id = $conn->real_escape_string($_GET['id']);
        
        // Note: We use '$id' (string) because IDs can be strings or numbers
        $sql = "SELECT * FROM recipes WHERE id = '$id'";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            $recipe = $result->fetch_assoc();
            
            // Convert ingredients JSON string back to an Array for the frontend
            $recipe['ingredients'] = json_decode($recipe['ingredients']);
            
            echo json_encode([
                "status" => "success", 
                "data" => ["recipe" => $recipe]
            ]);
        } else {
            echo json_encode([
                "status" => "fail", 
                "message" => "Recipe not found"
            ]);
        }
    } elseif (isset($_GET['search'])) {
        // B. Search recipes by title
        $search = $conn->real_escape_string($_GET['search']);
        $sql = "SELECT * FROM recipes WHERE title LIKE '%$search%'";
        $result = $conn->query($sql);
        
        $recipes = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                // We add each found recipe to the array
                // For search results, we don't strictly need to decode ingredients, 
                // but the frontend might expect specific fields.
                $recipes[] = $row;
            }
        }
        
        // Return the list of recipes
        echo json_encode([
            "status" => "success", 
            "results" => count($recipes), 
            "data" => ["recipes" => $recipes]
        ]);
    } else {
         echo json_encode(["status" => "fail", "message" => "Invalid parameters"]);
    }

} elseif ($method === 'POST') {
    // --- POST Request Handling (Upload Recipe) ---
    
    // 1. Get the JSON data sent from the frontend
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!$data) {
        echo json_encode(["status" => "fail", "message" => "No data received"]);
        exit;
    }

    // 2. Escape inputs to prevent SQL Injection
    $title = $conn->real_escape_string($data['title']);
    $publisher = $conn->real_escape_string($data['publisher']);
    $source_url = $conn->real_escape_string($data['source_url']);
    $image_url = $conn->real_escape_string($data['image_url']);
    $servings = (int)$data['servings'];
    $cooking_time = (int)$data['cooking_time'];
    
    // 3. Encode ingredients array back to JSON string for storage
    $ingredients = $conn->real_escape_string(json_encode($data['ingredients']));
    
    // 4. Insert into database
    // We assume 'id' is AUTO_INCREMENT in the database
    $sql = "INSERT INTO recipes (title, publisher, source_url, image_url, servings, cooking_time, ingredients) 
            VALUES ('$title', '$publisher', '$source_url', '$image_url', $servings, $cooking_time, '$ingredients')";

    if ($conn->query($sql) === TRUE) {
        // 5. Get the generated ID
        $new_id = $conn->insert_id; 

        // 6. Return the created recipe object
        $newRecipe = [
            'id' => $new_id,
            'title' => $title,
            'publisher' => $publisher,
            'source_url' => $source_url,
            'image_url' => $image_url,
            'servings' => $servings,
            'cooking_time' => $cooking_time,
            'ingredients' => $data['ingredients'],
            // Add a key to mark it as our own recipe (optional, matching frontend logic)
            'key' => 'local-db-key' 
        ];
        
        echo json_encode([
            "status" => "success", 
            "data" => ["recipe" => $newRecipe]
        ]);
    } else {
        echo json_encode(["status" => "fail", "message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>