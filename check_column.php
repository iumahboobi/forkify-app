<?php
$conn = new mysqli("localhost", "root", "", "forkify_db");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$sql = "SELECT image_url FROM recipes LIMIT 1";
$result = $conn->query($sql);

if ($result) {
    echo "Column exists. Value: " . print_r($result->fetch_assoc(), true);
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>