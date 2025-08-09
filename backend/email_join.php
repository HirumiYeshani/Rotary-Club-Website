<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'] ?? '';
    $lastName = $_POST['lastName'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $profession = $_POST['profession'] ?? '';
    $address = $_POST['address'] ?? '';
    $motivation = $_POST['motivation'] ?? '';

    $to = "chandula@allinoneholdings.com
    $subject = "New Join Us Application";

    $message = "New Join Us Application:\n\n" .
               "First Name: $firstName\n" .
               "Last Name: $lastName\n" .
               "Email: $email\n" .
               "Phone: $phone\n" .
               "Profession: $profession\n" .
               "Address: $address\n" .
               "Motivation: $motivation\n";

    $headers = "From: webmaster@yourdomain.com\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
