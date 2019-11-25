// Created by Villen on 19/11/23.

export default {
    name: 'vbCoverLoading',
    props: {
        propShow:{
            type: Boolean,
            default: true
        },
        propStyle:{
            default:''
        },
        propDelay: {
            type: Number,
            default: 7000
        },
        propImgLoading:{ //loading图
            default:''
        },
        propImgBreak:{   //破裂图
            default:''
        },
        propDefault:{ //展示默认样式
            type: String,
            default:'true'
        },
        onClose: {
            type: Function,
            default: function () {
            }
        },
        onReload: {
            type: Function,
            default: function () {
                return 'no'
            }
        },
    },
    data(){
        return {
            visible: this.propShow || false,
            visibleReload: this.onReload(),
            timer:null,
        }
    },
    watch:{
        propShow(val) {
            if (val=='none' || val==false) {
                this.visible = false;
            }else{
                if(!this.visible){
                    this.visible = true;
                    this.runTimer();
                }

            }
        },
        onReload(val){
            if(this.onReload()!='no'){
                this.visibleReload=1
            }
        }
    },
    computed:{

    },
    mounted() {
        if (this.visible) {
            this.runTimer();
        }
    },
    methods: {
        /*倒计时*/
        runTimer() {
            /*if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(this.close, this.propDelay);*/
        },
        /* 关闭 */
        close() {
            this.onClose();
            this.timer = null;
            setTimeout(()=>{
                this.visible = false;
            })
        },
        /*点击重试*/
        reload(){
            this.onReload();
        },
        destroyElement() {
            /*this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);*/
        },
        /*
         * 数据滚动
         * */
        listRolling(){
            this.classAnimate='animate'
        }
    }
    /*beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }*/
};
