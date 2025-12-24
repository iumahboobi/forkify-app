<?php
$conn = new mysqli("localhost", "root", "", "forkify_db");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$sql = "ALTER TABLE recipes ADD COLUMN image_url TEXT AFTER source_url";

if ($conn->query($sql) === TRUE) {
    echo "Table altered successfully";
} else {
    echo "Error altering table: " . $conn->error;
}
$conn->close();
?>