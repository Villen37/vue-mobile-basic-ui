// Created by Villen on 19/7/8.

export default {
    name: 'vbRollStop',
    props: {
        propCoinNum:{
            default: '0'
        },
        propStyle:{
            default:''
        },
        propIcon:{
            type: String,
            default:''
        }
    },
    data(){
        return {
            'classAnimate':'',
            'defaultArr':["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
        }
    },
    watch:{
        propCoinNum:function (v1,v2) {
            if(v1!=v2){
                let self = this;
                this.classAnimate='';
                setTimeout(()=>{
                    self.classAnimate = 'animate';
                },0)
            }
        }

    },
    computed:{

    },
    mounted() {
        //document.querySelector(".ac-roll-container")​
        this.listRolling();
    },
    methods: {
        /*
         * 数据滚动
         * */
        listRolling(){
            this.classAnimate='animate'
        }
    },
    beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }
};
