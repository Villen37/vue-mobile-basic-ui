/**
 * Created by Villen on 19/11/16.
 */


// scroll-stop 提示
import vbRollStop from '../../packages/roll-stop/index.vue';
// cover-img 蒙层loading
import vbCoverLoading from '../../packages/cover-loading/index.vue';
// pulldown-refresh 蒙层loading
import vbPulldownRefresh from '../../packages/pulldown-refresh/index.vue';
// roll-list 滚动数据
import vbRollList from '../../packages/roll-list/index.vue';


export default {
    name: "app",
    data() {
        return {
            aniLoading:false,
            aniPullDown:'',
            dataRoll:['list信息1','list信息2','list信息3','list信息4','list信息5','list信息6','list信息7'],
            last:0
        }
    },
    components: {
        vbRollStop,
        vbCoverLoading,
        vbPulldownRefresh,
        vbRollList
    },
    watch:{


    },
    mounted(){

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
                this.aniPullDown=0
                /*let fun = option.fun;
                fun();*/
            },2000)
        }
    }
}