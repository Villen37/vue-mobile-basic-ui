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
// 进度条
import vbProgress from '../../packages/progress/index.vue';
// 9宫格
import vbGrid9 from '../../packages/grid9/index.vue';

//------注册
import toast from '../../packages/toast/toast';
import modal from '../../packages/modal-dialogue/modal';
const install = function (Vue, opts = {}) {
    Vue.prototype.$vbToast = toast;
    Vue.prototype.$vbModal = modal;
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
            dataProgressNum :[100,200,300,400,500],
            dataProgressDesc :['一百','二百','三百','四百','五百'],
            dataGrids:[
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "黄金VIP天卡"
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "黄金VIP周卡",
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "黄金VIP月卡",
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "88金币"
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "黄金VIP季卡"
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "188金币"
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "黄金VIP年卡"
                },
                {
                    icon: "http://cdn01.happyjuzi.com/27/8b/ad5b5a7c002ca919d70bc0d4e55f.jpg?imageMogr2/thumbnail/!350x190r",
                    name: "688金币"
                }

            ],
            gridReset:0,
            gridPrizeOrder:-1,
            dataGridRight:3,
            last:0
        }
    },
    components: {
        vbRollStop,
        vbProgress,
        vbCoverLoading,
        vbPulldownRefresh,
        vbRollList,
        vbToast,
        vbModalContainer,
        vbModalDialogue,
        vbGrid9
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
        this.gridPrizeOrder=3
        setTimeout(()=>{
            //this.gridPrizeOrder=3
        },8000)

    },
    created() {
    },
    methods: {
        showLoading:function () {
            this.aniLoading=true;
            setTimeout(()=>{
                this.aniLoading=false;
            },200000)
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
            setTimeout(()=>{
                this.aniModalC=false
            },3000)
        },
        showModalD:function () {
            this.aniModalD=new Date()
        },
        showModalDJs:function () {
            this.$vbModal({
                propTitle:'title:'+new Date().getTime(),
                isCanClickMask:true,
                propContent:'content:'+new Date().getTime(),
                propVisible:new Date()
            })
        },
        gridFinish:function () {
            //this.toastPorp = {msg:'恭喜抽中', visible:'block'+new Date()};
            this.dataGridRight--;
            setTimeout(()=>{
                this.gridReset = new Date().getTime()
            },2000)
        },
        gridNoRight:function () {
            this.toastPorp = {msg:'走开', visible:'block'+new Date()};
        }
    }
}