// import Vue from "vue";
// Created by Villen on 18/11/8.
import withRender from "./index.vtpl";
import "./index.less";


export default withRender({
    name: 'listRoll',
    props: {
        listLenth:{
            type:Number,
            default:function () {
                return '';
            }
        },
        rollN:{
            type:Number,
            default: 5
        },
        listHeight:{
            type: String,
            default:'6rem'
        }
    },
    mounted() {
        this.listRolling(this.listLenth,this.rollN);
    },
    methods: {
        /*
         * 数据滚动
         * listLenth @param（数字，列表长度）
         * n @param 如果是listLenth>0，n才有效默认是5，标示一次显示最多的条数
         * */
        listRolling(listLenth,n=5){
            let block = document.querySelector('.ac-roll-body');
            let count = 0;
            let height = block.clientHeight;
            if(listLenth>0){
                height = height/listLenth; //每一行的高度
                let this_int = setInterval(() => {
                    count++;
                    block.classList.add("animate");
                    if (count >= listLenth - n) {
                        block.classList.remove("animate");
                        count = 0;
                    }
                    block.style.transform = `translateY(-${(height * count)}px)`;
                    block.style.WebkitTransform = `translateY(-${(height * count)}px)`;
                }, 1500);
            }else{
                let setT = function () {
                    block.style.cssText=`transition: all linear ${n*10-1}s;`
                    setTimeout(function () {
                        block.style.transform = `translateY(-${(height)}px)`;
                    },1000)
                }
                setT();
                this.timer  = setInterval(()=>{
                    block.style.cssText=`transition: all linear 0s;`
                    block.style.transform = ``;
                    setTimeout(function () {
                        setT();
                    },100)
                },n*10*1000)
            }

        }
    },
    beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }
});
