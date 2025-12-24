<?php
$url = 'http://localhost:9090/forkify-api/api.php';
$data = [
    'title' => 'TEST RECIPE PHP',
    'publisher' => 'Test Publisher',
    'source_url' => 'http://test.com',
    'image_url' => 'http://test.com/image.jpg',
    'servings' => 4,
    'cooking_time' => 30,
    'ingredients' => [
        ['quantity' => 1, 'unit' => 'kg', 'description' => 'Test Ingredient']
    ]
];

$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    ]
];

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) { 
    echo "Error"; 
} else {
    echo $result;
}
?>