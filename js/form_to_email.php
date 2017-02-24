<?php
/**
 * Created by PhpStorm.
 * User: Artem
 * Date: 2/23/2017
 * Time: 10:28 PM
 */
$name = $_POST['name'];
$email_from = $_POST['email'];
$message = $_POST['message'];

$to = "alekhinartem874@gmail.com";
$headers = "From: $email_from \r\n";
$email_subject = "Job";

mail($to,$email_subject,$email_body,$headers);