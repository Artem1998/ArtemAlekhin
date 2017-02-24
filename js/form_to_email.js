/**
 * Created by Artem on 2/23/2017.
 */

$name = $_POST['name'];
$email_from = $_POST['email'];
$message = $_POST['message'];

$to = "alekhinartem874@gmail.com";
$headers = "From: $email_from \r\n";
mail($to,$email_subject,$email_body,$headers);
