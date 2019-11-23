/**
 * Created by Villen on 19/11/16.
 */


// scroll-stop 提示
import vbRollStop from '../../packages/roll-stop/index.vue';
// cover-img 蒙层loading
import vbCoverLoading from '../../packages/cover-loading/index.vue';

export default {
    name: "app",
    data() {
        return {

            last:0
        }
    },
    components: {
        vbRollStop,
        vbCoverLoading
    },
    watch:{


    },
    mounted(){

    },
    created() {
    },
    methods: {

    }
}