<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_post['phone']
$msg = $_POST['textArea'];

$email_from = 'yatra55@gmail.com';
$email_subject = 'Versatile pictures inquiry';
$email_body = "User Name : $name.\n".
                "User Email : $email.\n".
                "User Phone : $phone.\n".
                "User Message : $msg.\n";

$to = 'gurneet.me@gmail.com';
$headers = "From: $email_from \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>