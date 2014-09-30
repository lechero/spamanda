
<?php
	
	$email = $_POST['email'];
	
	
	$site_owners_email = 'YOUR HOSTING EMAIL'; // Replace this with your own email address
	$site_owners_name = 'YOUR NAME'; // replace with your name
	
	
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Please enter a valid email address";	
	}
	
	
	if (!$error) {
		
		require_once('phpMailer/class.phpmailer.php');
		$mail = new PHPMailer();
		
		$mail->From = $email;
		$mail->FromName = $name;
		$mail->Subject = "e-mail submit";
		$mail->AddAddress($site_owners_email, $site_owners_name);
		$mail->AddAddress('', '');
	$mail->Body = $email;
		
		
		$mail->Mailer = "smtp";
 		$mail->Host = "YOUR HOST ADDRESS";
		 $mail->Port = YOUR HOST PORT NUMBER;
		 $mail->SMTPSecure = "tls"; 
		
		$mail->SMTPAuth = true; // turn on SMTP authentication
		$mail->Username = "YOUR HOSTING EMAIL"; // SMTP username
		 $mail->Password = "YOUR HOSTING EMAIL PASSWORD"; // SMTP password
		
		$mail->Send();
		
		echo "<li class='success'> Congratulations, " . $name . ". We've received your email. We'll be in touch as soon as we possibly can! </li>";
		
	} # end if no error
	else {

		$response1 .= (isset($error['email'])) ? "<li>" . $error['email'] . "</li> \n" : null;

		
		echo $response1;
	} # end if there was an error sending

?>








