<?php
$name = $_POST['nombre'];
$mail = $_POST['correo'];
$subjet = $_POST['asunto'];
$message = $_POST['descripcion'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Asunto: " . $subjet . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'alexismolina036@gmail.com';
$asunto = 'Mensaje desde Ishould';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>