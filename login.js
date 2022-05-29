var vm = new Vue({
    el:"#app",
    data:{
        message:'Hello World!雙向綁定',
        APITEST:'',
        user:'',
        password:'',
        LOGINTEST:''
    },
    methods:{
        API(){
                //this.$route = 可以抓到目前之前面url
                axios.get('http://localhost:8080/admin/login')
                    .then((res) => {
                        console.log(res);
                        this.APITEST = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            Login(){
                let data = new FormData();
                data.append('name',this.user);
                data.append('pwd',this.password);
                axios.post(
                    "http://localhost:8080/admin/login",
                    data
                  )
                  .then((response) => {
                    if(response.data == 'OK'){
                        console.log('成功')
                        window.location.href = "http://127.0.0.1:5500/index.html";
                    }else if(response.data == 'Error'){
                        this.APITEST = '請確認帳號密碼是否有誤';
                        console.log('失敗')
                    }
                  })
                  .catch((error) => {
                    this.APITEST = '請確認帳號密碼是否有誤';
                    console.log(error.message);
                  });
            },
            Value(){
                console.log(this.user)
                console.log(this.password)
            }

    }
})