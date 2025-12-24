<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forkify_db";

// 1. Connect to Database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "fail", "message" => "Connection failed: " . $conn->connect_error]));
}

// 2. Read data.json
// Since this file will be in forkify-api, the path to data.json needs to be absolute
$json_file_path = 'C:\Ihsanullah\JS_Challenges\18-Forkify_Final_Projekt\src\data.json';

if (!file_exists($json_file_path)) {
    die(json_encode(["status" => "fail", "message" => "File not found: $json_file_path"]));
}

$json_data = file_get_contents($json_file_path);
$data = json_decode($json_data, true);

if (!isset($data['data']['recipes'])) {
    die(json_encode(["status" => "fail", "message" => "Invalid JSON structure"]));
}

$recipes = $data['data']['recipes'];
$count = 0;
$errors = [];

// 3. Prepare Insert Statement
$stmt = $conn->prepare("INSERT INTO recipes (title, publisher, source_url, image_url, servings, cooking_time, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?)");

foreach ($recipes as $recipe) {
    // Check if recipe already exists by title
    $check_stmt = $conn->prepare("SELECT id FROM recipes WHERE title = ?");
    $check_stmt->bind_param("s", $recipe['title']);
    $check_stmt->execute();
    $result = $check_stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Recipe already exists, skip
        continue;
    }
    $check_stmt->close();

    // Prepare data
    $title = $recipe['title'];
    $publisher = $recipe['publisher'];
    $source_url = $recipe['source_url'];
    $image_url = $recipe['image_url'];
    $servings = $recipe['servings'];
    $cooking_time = $recipe['cooking_time'];
    $ingredients = json_encode($recipe['ingredients']); // Convert array to JSON string

    $stmt->bind_param("ssssiss", $title, $publisher, $source_url, $image_url, $servings, $cooking_time, $ingredients);

    if ($stmt->execute()) {
        $count++;
    } else {
        $errors[] = "Error inserting {$title}: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();

echo json_encode([
    "status" => "success", 
    "message" => "Import completed", 
    "imported_count" => $count,
    "errors" => $errors
]);
?>
