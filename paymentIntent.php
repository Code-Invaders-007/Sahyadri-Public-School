<?php
require './vendor/autoload.php';
header('Content-Type: application/json');
$amount = $_GET['amount'];

if (empty($amount)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing amount parameter']);
    exit();
}

$stripe = new \Stripe\StripeClient("");

try {
    $paymentIntent = $stripe->paymentIntents->create([
        'amount' => $amount*100,
        'currency' => 'INR',
        'payment_method_types' =>['card']
    ]);

echo json_encode(['client_secret' => $paymentIntent->client_secret]);
} catch (\Stripe\Exception\ApiErrorException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}