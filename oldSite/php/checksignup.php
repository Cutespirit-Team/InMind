<?php
$config = parse_ini_file('../config/phpmailer.ini');

session_start();
require_once "db_conn.php";         //連接資料庫
use PHPMailer\PHPMailer\PHPMailer;  //phpmailer的東西
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "PHPmailer/PHPMailer.php";
require_once "PHPmailer/SMTP.php";
require_once "PHPmailer/Exception.php";

// TODO: Fix email is not defined err
if (isset($_POST['email']) && isset($_POST['password'])){
    // error_reporting(E_ALL); 
    // ini_set("display_errors", 1);
    //htmlspecialchars
	$email = htmlentities($_POST['email']);
	$pass = htmlentities($_POST['password']);
    $time= date("Y/m/d");
    $otp = strval(rand(1000, 9999)); //隨機4位數
    if(empty($email)){
        echo "錯誤!郵件為空";
        exit();
    }
    if(empty($pass)){
        echo "錯誤!密碼為空";
        exit();
    }
    if(strlen($pass)<8){
        echo "密碼必須大於8位數";
        exit();
    }
    // hashing(encrypt) the password
    $pass = ($pass); //md5
    $sql = "SELECT * FROM account WHERE Email='$email' ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if (mysqli_num_rows($result) > 0 and strlen($row['Password']>0) ) {  //檢查是否註冊
        echo "此帳戶已被註冊";
    }else { //發送驗證碼
        $mail = new PHPMailer();
        $mail->CharSet = $config['charset'];
        $mail->isSMTP();
        $mail->Host = $config['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['username'];
        $mail->Password = $config['password'];
        $mail->Port = $config['port'];
        $mail->SMTPSecure = $config['SMTPSecure'];
        //email settings
        $mail->isHTML(true);
        $mail->setFrom($config['send_email'], $config['name']);
        $mail->addAddress($email);
        $mail->Subject = ("驗證碼");
        $mail->Body = ('您的驗證碼為:'.$otp);
        
        if($mail->send()){
            if(strlen($row['Email'])>0){
            $sql = "UPDATE account
            SET EmailVERIFY ='$otp', restime='$time'
            WHERE Email='$email' ";
            $result = mysqli_query($conn, $sql);
            mysqli_query($conn, $sql);
            echo "註冊成功";
        } else{
            $sql2 = "INSERT INTO account(Email, EmailVERIFY, bepassword, restime) VALUES('$email', '$otp','$pass','$time')";
            $result2 = mysqli_query($conn, $sql2);
            mysqli_query($conn, $sql2);
            // echo mysqli_error($conn);
            echo "註冊成功";
            }
        }
	}
}