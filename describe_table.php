<?php
$conn = new mysqli("localhost", "root", "", "forkify_db");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$result = $conn->query("DESCRIBE recipes");
while($row = $result->fetch_assoc()) {
    echo $row['Field'] . " - " . $row['Type'] . "\n";
}
$conn->close();
?>