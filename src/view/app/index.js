/**
 * Created by Villen on 19/11/16.
 */
import Vue from 'vue'
// modal-container 提示
import vbModalContainer from '../../packages/modal-container/index.vue';
// modal-dialogue 提示
import vbModalDialogue from '../../packages/modal-dialogue/index.vue';
// scroll-stop 提示
import vbRollStop from '../../packages/roll-stop/index.vue';
// cover-img 蒙层loading
import vbCoverLoading from '../../packages/cover-loading/index.vue';
// pulldown-refresh 蒙层loading
import vbPulldownRefresh from '../../packages/pulldown-refresh/index.vue';
// roll-list 滚动数据
import vbRollList from '../../packages/roll-list/index.vue';
// toast 提示
import vbToast from '../../packages/toast/index.vue';

//------注册
import toast from '../../packages/toast/toast';
import modal from '../../packages/modal-dialogue/modal';
const install = function (Vue, opts = {}) {
    Vue.prototype.$vbToast = toast;
    Vue.prototype.$vbModalDialogue = modal;
};
install(Vue)
export default {
    name: "app",
    data() {
        return {
            aniLoading:false,
            aniPullDown:'',
            dataRoll:['list信息1','list信息2','list信息3','list信息4','list信息5','list信息6','list信息7'],
            toastPorp:{},
            aniModalC:false,
            aniModalD:false,
            last:0
        }
    },
    components: {
        vbRollStop,
        vbCoverLoading,
        vbPulldownRefresh,
        vbRollList,
        vbToast,
        vbModalContainer,
        vbModalDialogue
    },
    watch:{

    },
    mounted(){
        /*setTimeout(()=>{
            this.$vbToast({
                propMsg:'888',
                propVisible:new Date(),
                propDelay:2000
            })
        },1000)*/

    },
    created() {
    },
    methods: {
        showLoading:function () {
            this.aniLoading=true;
            setTimeout(()=>{
                this.aniLoading=false;
            },2000)
        },
        pulldownEnd:function (option) {
            setTimeout(()=>{
                this.aniPullDown=0;
                setTimeout(()=>{
                    this.aniPullDown=1;
                },500)
                /*let fun = option.fun;
                fun();*/
            },2000)
        },
        showToast:function () {
            this.toastPorp = {msg:'toast', visible:'block'+new Date()};
        },
        showToastJs:function () {
            this.$vbToast({
                propMsg:'time:'+new Date().getTime(),
                propVisible:new Date(),
                propDelay:2000
            })
        },
        showModalC:function () {
            this.aniModalC=true
        },
        showModalD:function () {
            this.aniModalD=new Date()
        },
        showModalDJs:function () {
            this.$vbModalDialogue({
                propTitle:'title:'+new Date().getTime(),
                isCanClickMask:true,
                propContent:'content:'+new Date().getTime(),
                propVisible:new Date()
            })
        }
    }
}