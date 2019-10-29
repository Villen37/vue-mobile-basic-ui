/**
 * Created by zhang on 2018/3/24.
 */
import withRender from "./index.vtpl";
import './index.less';
import cryImg from './img/cry.png';
import warningImg from './img/exclamation.png';
import xImg from './img/x.png';
import successImg from './img/success.png';
const typeConfig = {
    success: {
        icon: successImg,
        cls: 'success',
    }, error: {
        icon: xImg,
        cls: 'error',
    }, warning: {
        icon: warningImg,
        cls: 'warning',
    }, regret: {
        icon: cryImg,
        cls: 'regret',
    },
};

export default withRender({
    name: 'Toast',
    props: {
        name: {
            type: String,
            default: 'fade'
        },
        type: {
            type: String,
            default: ''
        },
        visibleProp: {
            type: String,
            default: 'none'
        },
        delayCount: {
            type: Number,
            default: 2000
        },
        icon: {
            type: String,
            default: ''
        },
        msg: {
            type: String,
            default: ''
        },
        onClose: {
            type: Function,
            default: function () {
            }
        },
    },
    staticData: {
        timer: null,
    },
    data() {
        return {
            visible: this.visibleProp=='block' ? true : false
        }
    },
    watch: {
        'visibleProp'(val) {
            if (val=='none') {
                this.visible = false;
            }else{
                this.visible = true;
            }
        },
    },
    mounted(){
        if (this.visible == 'block') {
            this.runTimer();
        }
    },
    computed: {
        toastParams() {
            if (this.type && typeConfig[this.type]) {
                return typeConfig[this.type];
            }
            return null;
        }
    },
    methods: {
        runTimer() {
            if (this.$options.staticData.timer) {
                clearTimeout(this.$options.staticData.timer);
                this.$options.staticData.timer = null;
            }
            this.$options.staticData.timer = setTimeout(this.close, this.delayCount);
        },
        close() {
            this.visible = false;
            this.visibleProp = 'none';
            this.onClose();
            this.$options.staticData.timer = null;
            console.log(this.visible)
        },
        destroyElement() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
    }
})
