<?php
session_start();
if (!isset($_SESSION['Email']) && !isset($_SESSION['id'])){
    header("Location: /login");
}
require_once "db_conn.php";
$email=$_SESSION['Email'];
$sql = "SELECT * FROM account WHERE Email= '$email' ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
?>



<!doctype html>
<html>
    <head>
            <meta charset="UTF-8">    
            <title>InMind</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link href="css/home.css" rel="stylesheet" >
            <link href="css/my.css" rel="stylesheet" >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script>

    </head>
    <body>
        <div class="bk">
            


            <div class="container">
            <?php include("menu.php");?>   <!-- 上方選單 -->
                <div class="body-myinfo">
               

                <div class="card">
                <div class="card-body">
                    <div class="card-text myinfo-name"> <?php echo $row['Name']; ?> </div>
                    <div class="card-text myinfo-id">InMind ID: <?php echo $row['id']; ?> </div>
                    <div class="card-text myinfo-resume"><?php echo $row['Resume']; ?> </div>
                </div>

                </div>

                </div>
            </div>
        
        </div>







        <script>
        console.log("%c警告！","color: red;font-size: 50px");
        console.log("請注意！如果您不是開發者，請勿在此輸入任何人請您輸入的內容！！\n如果有人告在此貼上某些內容可以獲取任何東西或是使用新功能，都是不實的詐騙訊息，會讓不法份子有機會存取您的 InMind 帳戶。");
    </script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script> -->
    <script src="/script/main.js"></script>
    <!-- <script src="/script/vue.min.js"></script> -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/script/verication-code.js"></script>


    </body>











</html>