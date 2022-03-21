var vm = new Vue({
    el:"#app",
    data:{
        message:'Hello World!雙向綁定',
        list2:[
            '曾寶寶','張寶寶'
        ],
        isShow:true,
        count:0,
        isActive:true,
        isChild:true,
        textColor:'grey',
        bgColor:'skyblue',
        int:-1,
        radius:30,
        name:'',
        age:'',
        index:'',
        show:true,
        APITEST:'',
        colorLists:[
            'pink',
            'blue',
            'yellow'
        ],
        slideLists:[
            {src: './images/image01.jpg',desc:'1st'},
            {src: './images/image02.jpg',desc:'2st'},
            {src: './images/image03.jpg',desc:'3st'},
            {src: './images/image04.jpg',desc:'4st'},
            {src: './images/image05.jpg',desc:'5st'}
        ],
        list:[
            {name:'王大明', age: 25},
            {name:'劉小花', age: 31},
            {name:'歐陽漢奸', age: 27}
        ]
    },
    methods:{
        test(){
            alert('Success')
        },
        addCount(){
            ++ this.count
        },
        colorChange(){
            const i = Math.floor(Math.random()*3);
            this.bgColor = this.colorLists[i]
        },
        addPerson(){
            this.list.push({
                name:this.name,
                age:this.age
            })
        },
        deletePerson(){
            this.list.splice(this.index-1,1)
        },
        counter(){
            console.log(this.$refs.count)
            const num = parseInt(this.$refs.count.innerText, 10) + 1 ;
                              //上方的this.xxx , 10 是將此數字用10進位方式做處理
            this.$refs.count.innerText = num;
        },
        setShow(){
            this.show = !this.show
        }
        ,
        TEST(){
            console.log(this.$el)
        },
        change(index){
            console.log(index),//0
            console.log(this.int)//-1
                this.int = 
                    (this.int === index) ? -1 : index;
                    //改變index的話則永遠 -1 === 0 > 將this.int = this.index 則改變所點的index li
                    //一樣的話則為 0 === 0 > 則回傳-1 而前端則會顯示為false
        },
        API(){
                //this.$route = 可以抓到目前之前面url
                axios.get('http://localhost:8080/hello')
                    .then((res) => {
                        console.log(res);
                        this.APITEST = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
    }
})