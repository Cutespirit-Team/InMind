<?php
$db_config = parse_ini_file('config/database.ini');

// This is useless config which is replaced by $db_config.
// $sname= "127.0.0.1";
// $uname= "Inmind";
// $password = "asdf123456@@";
// $db_name = "inmind";

// TODO: Add Try-catch to catch to err msg and output.
$conn = mysqli_connect($db_config['hostname'], $db_config['uname'], $db_config['pwd'], $db_config['db_name']);
if (!$conn) {
	echo "連線錯誤";
}