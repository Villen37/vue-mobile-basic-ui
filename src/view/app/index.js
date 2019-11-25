/**
 * Created by Villen on 19/11/16.
 */


// scroll-stop 提示
import vbRollStop from '../../packages/roll-stop/index.vue';
// cover-img 蒙层loading
import vbCoverLoading from '../../packages/cover-loading/index.vue';
// pulldown-refresh 蒙层loading
import vbPulldownRefresh from '../../packages/pulldown-refresh/index.vue';
export default {
    name: "app",
    data() {
        return {
            aniLoading:false,
            aniPullDown:'',
            last:0
        }
    },
    components: {
        vbRollStop,
        vbCoverLoading,
        vbPulldownRefresh
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