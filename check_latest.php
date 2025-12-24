<?php
$conn = new mysqli("localhost", "root", "", "forkify_db");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

echo "Last 5 recipes:\n";
$sql = "SELECT id, title, publisher FROM recipes ORDER BY id DESC LIMIT 5";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Title: " . $row["title"]. " - Publisher: " . $row["publisher"]. "\n";
    }
} else {
    echo "0 results";
}
$conn->close();
?>