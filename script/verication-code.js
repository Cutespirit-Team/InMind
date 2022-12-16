const codes = document.querySelectorAll(".code");

// init the user input code
var input_code = [0, 0, 0, 0];
codes[1].focus();
codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {

        console.log('email:' + myApp.signupData.email);
        // auto auth verification code
        console.log("序號:" + idx + "輸入:" + e.key);
        input_code[idx] = e.key;

        // setting counter to count is 4 nums
        var counter = 0;
        for (var i = 0; i < 4; i++) {
            if (input_code[i] == 0) {
                counter += 1;
            }
        }
        // if not 0000 or not empty
        if (counter == 0) {
            // auth
            // alert('hi');
            var vari_code = input_code[0] +
                input_code[1] +
                input_code[2] +
                input_code[3];

            var params = new URLSearchParams();
            // parameters of email and pwd
            params.append('email', getCookie('email'));
            params.append('otp', vari_code);
            axios.post('/php/check-verify-code.php', params)
                .then((res) => {
                    console.log(res.data);
                    if (res.data == '登入成功!') {
                    location.href="../"; //跳轉首頁
                    }
                })
                .catch((error) => {
                    // catch axio post err
                    console.log("有錯誤喔啾咪:" + error);
                });
        }

        // auto next label of verification code 
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = "";
            setTimeout(() => codes[idx + 1].focus(), 10);
        } else if (e.key === "Backspace") {
            setTimeout(() => codes[idx - 1].focus(), 10);
        } else if (idx == codes.length - 1) {
            codes[idx].blur();
        }

    });
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}