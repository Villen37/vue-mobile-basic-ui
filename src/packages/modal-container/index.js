// Created by Villen on 19/11/23.

export default {
    name: 'vbModalContainer',
    props: {
        propShow:{
            type: Boolean,
            default: false
        },
        propStyle:{
            default:''
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

    },
    methods: {
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
        }

    }
    /*beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }*/
};
