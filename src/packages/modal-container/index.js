// Created by Villen on 19/11/23.

export default {
    name: 'vbModalContainer',
    props: {
        propShow:{
            type: Boolean,
            default: false
        },
        propCanClick:{
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
            visible: this.propShow || '',
            visibleReload: this.onReload(),
            timer:null,
        }
    },
    watch:{
        propShow(val) {
            if (val=='none' || val==false) {
                this.visible = 'show hide';
                setTimeout(()=>{
                    this.visible = '';
                },400)
            }else{
                if(this.visible==''){
                    this.visible = 'show';
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
            this.visible = 'show hide';
            setTimeout(()=>{
                this.visible = '';
            },400)
        },
        /*点击重试*/
        reload(){
            this.onReload();
        },
        /*点击背景*/
        clickBg(){
            if(this.propCanClick){
                this.close()
            }
        }

    }
    /*beforeDestroy() {
        window.clearInterval(this.timer);
        this.timer = null;
    }*/
};
