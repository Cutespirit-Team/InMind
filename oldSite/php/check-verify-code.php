<?php 
session_start(); 
require_once "db_conn.php";

// 將 email跟otp以POST方式從verification-code.js送進來
if (isset($_POST['email']) && isset($_POST['otp'])) {
	$email = htmlentities($_POST['email']);
	$otp = htmlentities($_POST['otp']);
  
	if (empty($email)) {
		echo "郵件為空!";
	    exit();
	} 
    if(empty($otp)){
        echo "驗證碼為空!";
	    exit();
	}

    // 資料庫中尋找尋找email 及 otp
    $sql = "SELECT * FROM account WHERE Email='$email'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    // 驗證資料庫中的OTP是否等於使用者輸入的OTP
	if ( $row['EmailVERIFY'] == $otp){
        $pass=$row["bepassword"];
        $sql = "UPDATE account SET Password = '$pass' WHERE Email = '$email'";
        $result = mysqli_query($conn, $sql);
        mysqli_query($conn, $sql);

        // 將email及id 存入session(登入)
        $_SESSION['Email'] = $row['Email']; 
        $_SESSION['id'] = $row['id'];
        echo "登入成功!";
    }else{
        echo "驗證失敗!";
        // echo $otp;
        // echo $email;
        // echo $row['EmailVERIFY'];
    }
}else{
    echo "未接收到資料!";
}