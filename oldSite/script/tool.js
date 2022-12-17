var myApp1 = new Vue({
    el: '#tool',
    data: {
        BMIData: {
            tall: '',
            weight: '',
        },
        message:'0',
    },
    methods: {

        // BMI: function () {
        //     tall=(this.BMIData.tall)*0.01;
        //     weight=this.BMIData.weight;
        //     this.message=weight/(tall*tall);
        // }
        
    },
    watch: {
        'BMIData.tall': function () {
            tall=(this.BMIData.tall)*0.01;
            // weight=this.BMIData.weight;
            // this.message=weight/(tall*tall);
            // alert(this.BMIData.weight);
            if(this.BMIData.weight.length>0){
            this.message=Math.round((weight/(tall*tall))*100)/100;
            // alert(this.BMIData.weight);
            }
            
        },
        'BMIData.weight': function () {
            // tall=(this.BMIData.tall)*0.01;
            weight=this.BMIData.weight;
            if(this.BMIData.tall.length>0){
            this.message=Math.round((weight/(tall*tall))*100)/100;
            // alert(this.BMIData.weight);
            }
        },
        deep: true
    },
})