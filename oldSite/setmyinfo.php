<?php
session_start();
if (!isset($_SESSION['Email']) && !isset($_SESSION['id'])){
    header("Location: /login");
}
?>

<!doctype html>
<html>
    <head>
            <meta charset="UTF-8">    
            <title>InMind</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link href="css/settings.css" rel="stylesheet" >
            <!-- <link href="css/login.css" rel="stylesheet" > -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script>
    </head>
    <body>
        <div id="settingApp">
            <div class="page-title">請選擇你的生日<br>
                <div class="page-subtitle">此資料不會顯示在您的個人資料</div>

                <?php
                    // calculator age limit
                    $now_year = date("Y");
                    $now_date = date("m-d");
                    $max_date = ($now_year-13).'-'. $now_date;
                    $min_date = ($now_year-100).'-'. $now_date;
                ?>
                <!-- 年齡 -->
                <div class="setting-content">
                    <form @submit.prevent="send_data()">
                        <input type="date" class="date_picker" v-model="infoData.birthday" min="<?php echo $min_date;?>" max="<?php echo $max_date;?>">
                        <button type="submit" 
                                class="btn btn-info login-next"
                                href="#nick_name"
                                data-bs-toggle="modal"
                                data-bs-target="#nick_name">下一步</button>
                    </form>
                </div>
            </div>

            
            <!-- 暱稱 -->
            <div class="modal fade animate__animated animate__slideInRight " id="nick_name">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <!-- window body -->
                        <div class="modal-body">
                          <p>sss</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-dark login" href="#nick_name" data-bs-toggle="modal" data-bs-target="#nick_name">登入</button>
            </div>
        </div>

        


        <script>
            console.log("%c警告！","color: red;font-size: 50px");
            console.log("請注意！如果您不是開發者，請勿在此輸入任何人請您輸入的內容！！\n如果有人告在此貼上某些內容可以獲取任何東西或是使用新功能，都是不實的詐騙訊息，會讓不法份子有機會存取您的 InMind 帳戶。");
        </script>
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script> -->
        <!-- <script src="/script/main.js"></script> -->
        <!-- <script src="/script/vue.min.js"></script> -->
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="/script/settings.js"></script>
    </body>
</html>
