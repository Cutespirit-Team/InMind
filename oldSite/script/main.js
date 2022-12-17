var myApp = new Vue({
    el: '#loginapp',
    data: {
        signupData: {
            email: '',
            password: '',
        }
    },
    methods: {

        // 傳送電子郵件驗證碼
        send: function () {

            // 增加電子郵件和密碼的參數
            var params = new URLSearchParams();
            params.append('email', this.signupData.email);
            params.append('password', this.signupData.password);

            // 傳送 email 和 password 以POST方式送去 checksignup.php 檢測
            axios.post('/php/checksignup.php', params)
                .then((res) => {

                    // 如果註冊成功
                    if (res.data == '註冊成功') {
                        document.cookie = 'email=' + this.signupData.email + '; expires=Wed, 1 Jan 2070 13:47:11 UTC; path=/';
                        $('#email-verify').modal('show');
                    } else if (res.data == '此帳戶已被註冊') {
                        // 如果帳戶已經被註冊
                        $('#signup').modal('toggle');
                        $('#login').modal('show');
                    }
                })
                .catch((error) => {
                    // catch axio post err
                    console.log("有錯誤喔啾咪:" + error);
                });
        },

        // func of resending email verification code
        resend: function () {
            var params = new URLSearchParams();

            // parameters of email and pwd
            params.append('email', this.signupData.email);
            params.append('password', this.signupData.password);
            axios.post('/php/rechecksignup.php', params);
        },
        loginsend: function () {
            var params = new URLSearchParams();
            // parameters of email and pwd
            params.append('email', this.signupData.email);
            params.append('password', this.signupData.password);
            axios.post('/php/checklogin.php', params)
            //如果登入成功，就跳轉回首頁
                .then((res) => {
            if (res.data == '登入成功!') {
                location.href="../"; //跳轉首頁
                
            }
        });


        },


    }
})

// time countdown of resending verification code
var wait = 30;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "重新發送";
        wait = 30;
    } else {
        o.setAttribute("disabled", true);
        o.value = '重新發送' + '(' + wait + ')';
        wait--;
        setTimeout(function () {
            time(o)
        },
            1000)
    }
}
document.getElementById("emailtimebtn").onclick = function () { time(this); }




