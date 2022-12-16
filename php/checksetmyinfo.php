<?php
session_start(); 
// Receive personal data from settings.js

$real_name = $_POST['real_name'];
$nick_name = $_POST['nick_name'];
$gender = $_POST['gender'];
$birthday = $_POST['birthday'];
$country = $_POST['country'];
require_once "db_conn.php";
////////////////////////////////
$email=$_SESSION['Email'];

// 處理真實姓名
if(!empty($real_name)){
    $name = $_POST['real_name'];
}

// 處理暱稱
if(!empty($nick_name)){
    $gender = $_POST['nick_name'];
}

// 處理性別
if(!empty($gender)){
    $gender = $_POST['gender'];
}

// 處理生日
if(!empty($birthday)){
    $birthday = $_POST['birthday'];
    $sql = "UPDATE account
            SET Birthday = '$birthday'
            WHERE Email='$email' ";
            $result = mysqli_query($conn, $sql);
            echo "更新成功";
}

// 處理國家
if(!empty($country)){
    $country = $_POST['country'];
}

?>