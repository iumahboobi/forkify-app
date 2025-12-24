<?php
$conn = new mysqli("localhost", "root", "", "forkify_db");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$result = $conn->query("SHOW COLUMNS FROM recipes");
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Field: " . $row["Field"]. "\n";
    }
}
$conn->close();
?>