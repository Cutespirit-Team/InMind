var myinfo = new Vue({
    el: '#settingApp',
    data: {
        infoData: {
            real_name: 'a',
            nick_name: 'a',
            gender: 'a',
            birthday: '',
            country: 'a'
        }
    },
    computed: {

    },
    watch: {

    },
    methods: {

        // sending settings data to setmyinfo.php
        send_data: function () {
            // add four parameters
            var params = new URLSearchParams();
            params.append('real_name', this.infoData.real_name);
            params.append('nick_name', this.infoData.nick_name);
            params.append('gender', this.infoData.gender);
            params.append('birthday', this.infoData.birthday);
            params.append('country', this.infoData.country);

            // 傳送 個人資料設定 以POST方式送去 setmyinfo.php 檢測
            axios.post('/php/checksetmyinfo.php', params)
                .then((res) => {

                    // 如果更新成功
                    if (res.data == '更新成功') {
                        // TODO: Pop up a window to tell user finished!
                        console.log('hello');

                    } else if (res.data == '無法設定') {
                        // TODO: Pop up a window to tell user Error!
                    }
                })
                .catch((error) => {
                    // catch axio post err
                    console.log("有錯誤喔啾咪:" + error);
                });
        }
    },
});
