<!doctype html>
<html>
    <head>
        <script src="/script/tool.js"></script>
            <meta charset="UTF-8">    
            <title>InMind</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link href="css/home.css" rel="stylesheet" >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script>

    </head>
    <body>
        <div id="tool">
            <form @submit.prevent="BMI()">
         
                <input class="form-control login-input" v-model="BMIData.tall" type="tall" placeholder="身高"><br>
                <input class="form-control login-input" v-model="BMIData.weight" type="weight" placeholder="體重">
            
            <!-- next to home page or send user error noti -->
                <div style="color:white">您的BMI為 {{ message }}</div>
            </form>
        </div>

        <script>
        console.log("%c警告！","color: red;font-size: 50px");
        console.log("請注意！如果您不是開發者，請勿在此輸入任何人請您輸入的內容！！\n如果有人告在此貼上某些內容可以獲取任何東西或是使用新功能，都是不實的詐騙訊息，會讓不法份子有機會存取您的 InMind 帳戶。");
    </script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script> -->
    <script src="/script/tool.js"></script>
    <!-- <script src="/script/vue.min.js"></script> -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    </body>
</html>