<?php
$servername = "localhost";
$username = "SPS";
$password = "admin-alive";
$dbname = "contact_us";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Extract values submitted through the form
$name =  $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message =$_POST['message'];

// Insert data into the MySQL database
$sql = "INSERT INTO webvisitors (name, email, phone, message)
        VALUES ('$name', '$email', '$phone', '$message')";

if (mysqli_query($conn, $sql)) {
    echo "Record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

if (mysqli_query($conn, $sql)) {
    // Redirect to email client with prepopulated fields
    $to = "feedback@example.com";
    $subject = "Feedback from website";
    $body = "Message: $message";
    $headers = "From: $email";
    $recipient = "sahyadri@gmail.com";
    // Use header() function to redirect to email client
    header("Location:mailto:$recipient?subject=$subject&body=$body");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>