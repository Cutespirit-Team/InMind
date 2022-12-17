<?php 
session_start(); 
require_once "db_conn.php";

if (isset($_POST['email']) && isset($_POST['password'])) {

	$email = htmlentities($_POST['email']);
	$pass = htmlentities($_POST['password']);

	if (empty($email)) {
		echo "郵件未填!";
	    exit();
        }
	if(empty($pass)){
        echo "密碼未填!";
	    exit();
	}

    $pass = ($pass); //md5
    $sql = "SELECT * FROM account WHERE Email='$email' AND Password='$pass'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        if ($row['Email'] == $email && $row['Password'] == $pass) {
            $_SESSION['Email'] = $row['Email'];
            $_SESSION['id'] = $row['id'];
            if(strlen($row['Name'])>0 && strlen($row['Gender']>0)){
            $_SESSION['Name'] = $row['Name'];
            $_SESSION['Gender'] = $row['Gender'];
            }
            echo "登入成功!";
            
        }
        }
}else{
    echo $email;
    echo $pass;
    echo $row['email'];
    echo "錯誤!";
}
            	
?>