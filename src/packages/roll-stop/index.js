// Created by Villen on 19/7/8.

export default {
    name: 'vbRollStop',
    props: {
        propCoinNum:{
            default: ''
        },
        propIcon:{
            type: String,
            default:''
        }
    },
    data(){
        return {
            'classAnimate':'',
            'defaultArr':["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            'appendDom':'<div>76</div>'
        }
    },
    watch:{
        propCoinNum:function (v1,v2) {
            if(v1!=v2){
                this.classAnimate='';
                this.setDom(v1)
                setTimeout(()=>{
                    this.classAnimate = 'animate';
                },10)
            }
        }

    },
    computed:{

    },
    mounted() {
        //document.querySelector(".vb-roll-container")​
        this.setDom(this.propCoinNum);
        this.listRolling();
    },
    methods: {
        /*
         * 数据滚动
         * */
        listRolling(){
            this.classAnimate='animate'
        },
        setDom(value){
            if(value=='' || value==0){
                return '';
            }
            let str = typeof(value)=='number' ? value.toString()+'' : value;
            let arr = str.split('')
            let dom ='';
            arr.forEach((item)=>{
                dom += '<div class="num-bg">'+item+'</div>'
            })
            this.appendDom = dom;
        }

    },
    beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }
};
