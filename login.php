<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">    
        <title>InMind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link href="css/login.css" rel="stylesheet" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.0/vue.js"></script>
        <!--
            (C) InMind 2022. All rights reserved.
            (C) Cutespirit 2022. All rights reserved.
        -->
    </head>
    <body>
        <header>
            <button type="button" class="btn btn-dark login" href="#login" data-bs-toggle="modal" data-bs-target="#login">登入</button>
            <div class="image"></div>
            <br>
            <div class="subTitle"></div>
        </header>
        
        <!-- <section></section>
        <footer></footer> -->
        <br>

        <!-- vue start -->
        <div class="bk" id="loginapp">
            <div class="rol"> 
                <center> <!-- center已棄用，仍然可用，TODO: 更改其他元素 -->
                    <br>
                    <button type="button" class="btn btn-info signup " href="#signup" data-bs-toggle="modal" data-bs-target="#signup"> 註冊</button>
                    <button type="button" class="btn btn-dark signup">更多方式</button>
                    <br>
                
                    <!-- 隱私政策彈窗 -->
                    <!-- 跳出隱私政策視窗內容 -->
                    <div class="modal fade" id="policy">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <!-- window header -->
                                <div class="modal-header">
                                    <h3>隱私政策</h3>
                                    <button type="button" class="btn-close"  data-bs-dismiss="modal"></button>
                                </div>
                                <!-- window body -->
                                <div class="modal-body">
                                    <p>你沒有隱私</p>
                                </div>

                            </div>
                        </div>
                    </div>
                
                    <!-- 使用政策視窗內容 -->
                    <div class="modal fade animate__animated " id="use-policy">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <!-- window header -->
                                <div class="modal-header">
                                    <h3>使用政策</h3>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <!-- window body -->
                                <div class="modal-body">
                                    <p>隨便用</p>
                                </div>

                            </div>
                        </div>
                    </div>

                     <!-- 跳出登入視窗內容 -->
                     <div class="modal fade animate__animated animate__slideInRight animate__faster " id="login">
                        <div class="modal-dialog modal-fullscreen" role="document">
                            <div class="modal-content">
                                <!-- window body -->
                                <div class="modal-body">
                                    <!-- arror back -->
                                    <div class="arrow" data-bs-dismiss="modal" class="btn btn-secondary" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                                        </svg>
                                    </div>
                                    <div class="page-title" >歡迎登入</div>
                                    <div class="page-subtitle"><b>使用您的電子郵件和密碼登入InMind</b></div>
                                    <!-- typing email and pwd -->

                                    
                                    <!-- URL:https://getbootstrap.com/docs/4.0/components/forms/ TODO: 將input bg 設成灰色；輸入的字設成白色-->
                                    <form @submit.prevent="loginsend()">
                                        <div class="login-page-content" >
                                            <input class="form-control login-input" v-model="signupData.email" type="email" placeholder="請在此輸入您的電子郵件"><br>
                                            <input class="form-control login-input" v-model="signupData.password" type="password" placeholder="請在此輸入您的密碼">
                                        </div>    
                                        <!-- pop up signup interface -->
                                        <div class="login-goto-signup">
                                            還沒有帳號嗎?<a href="#signup" data-bs-toggle="modal" data-bs-target="#signup" style="text-decoration:none;color:cyan;">註冊</a>
                                        </div>
                                        <!-- next to home page or send user error noti -->
                                        <button type="submit" class="btn btn-info login-next " href="#signup">下一步</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 註冊視窗內容 -->
                    <div class="modal fade animate__animated animate__slideInRight animate__faster" id="signup">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content ">
                                <!-- window body -->
                                <div class="modal-body">
                                    <!-- arrow back -->
                                    <div class="arrow" data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                                        </svg>
                                    </div>
                                    <div class="page-title">歡迎註冊</div>
                                    <div class="page-subtitle">
                                        <b>使用您的電子郵件和密碼註冊InMind</b>
                                    </div>
                                    <div>
                                        <!-- typing email and pwd -->
                                        <form @submit.prevent="send()">
                                            <div class="login-page-content">
                                                <!-- URL:https://getbootstrap.com/docs/4.0/components/forms/ TODO: 將input bg 設成灰色；輸入的字設成白色-->
                                                <input class="form-control login-input" v-model="signupData.email" name="email" id="email" type="email" placeholder="請在此輸入您的電子郵件"><br>
                                                <input class="form-control login-input" v-model="signupData.password" name="password" id="password" type="password" placeholder="請在此輸入您的密碼">
                                            </div>
                                            
                                            <div class="login-goto-signup">
                                                <!-- back to login interface -->
                                                您有帳號嗎?<a href="#login" data-bs-toggle="modal" data-bs-target="#login" style="text-decoration:none;color:cyan;">登入</a>
                                            </div>
                                            
                                            <!-- next to send verification code or back to login interface-->
                                            <button type="submit" class="btn btn-info login-next" >下一步</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 跳出電子郵件驗證視窗 -->
                    <div class="modal fade animate__animated animate__fadeIn animate__faster" id="email-verify">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                                <!-- window body -->
                                <div class="modal-body">
                                    <!-- 上一頁的箭頭 -->
                                    <div class="arrow" data-bs-toggle="modal" data-bs-target="#signup" class="btn btn-secondary" aria-label="Close">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                                        </svg>
                                    </div>
                                    <div class="page-title" >驗證碼已發送</div>
                                    <div class="page-subtitle"><b>驗證碼已發送至 請在下方框輸入</b></div>

                                    <!-- 驗證碼 -->
                                    <!-- URL:https://getbootstrap.com/docs/4.0/components/forms/ TODO: 將input bg 設成灰色；輸入的字設成白色-->>
                                    <div class="code-container" id="code">
                                        <input type="number" class="code" placeholder="" min="0" max="9" required>
                                        <input type="number" class="code" placeholder="" min="0" max="9" required>
                                        <input type="number" class="code" placeholder="" min="0" max="9" required>
                                        <input type="number" class="code" placeholder="" min="0" max="9" required>
                                    </div>

                                    <!-- pop up verification code interface -->
                                    <div class="code-isGet">
                                        <a style="color: aliceblue;">沒有收到驗證碼嗎?</a>
                                        <a style="color: #D0D0D0;">&nbsp┃&nbsp</a>
                                        <input type="button" class="resend" @click="resend" id="emailtimebtn" value="重新發送" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <center>

            <!-- footer -->
            <p class="bottom-text" style="color: #D0D0D0;font-size:10px;" >
                當您點擊了 "註冊" 或 "登入" 按鈕，即視為您已同意<br>我們的 
                <b>
                    <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#policy">隱私政策</a>
                </b>和
                <b>
                    <a href="" type="button" data-bs-toggle="modal" data-bs-target="#use-policy">使用條款 </a>
                </b>
            </p>
        </center>
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