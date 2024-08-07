<?php
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$file = 'responses.json';
if (!file_exists($file)) {
    file_put_contents($file, '[]');
}

$responses = json_decode(file_get_contents($file), true);
$responses[] = $data;
file_put_contents($file, json_encode($responses));

echo json_encode(['status' => 'success']);
?>
