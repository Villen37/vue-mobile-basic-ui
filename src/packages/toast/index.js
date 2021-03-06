/**
 * Created by villen on 2019/11/24.
 */

import cryImg from '../../imgs/cry.png';
import warningImg from '../../imgs/exclamation.png';
import xImg from '../../imgs/x.png';
import successImg from '../../imgs/success.png';
const typeConfig = {
    success: {
        propIcon: successImg,
        cls: 'success',
    }, error: {
        propIcon: xImg,
        cls: 'error',
    }, warning: {
        propIcon: warningImg,
        cls: 'warning',
    }, regret: {
        propIcon: cryImg,
        cls: 'regret',
    },
};

export default {
    name: 'vbToast',
    props: {
        propName: {
            type: String,
            default: 'fade'
        },
        propVisible: {
            default: 'none'
        },
        propDelay: {
            type: Number,
            default: 1800
        },
        propIcon: {
            type: String,
            default: ''
        },
        propMsg: {
            type: String,
            default: ''
        },
        onType:{
            default:'dom' //如果是js，说明是被js直接拉起的
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
            visible: (this.propVisible=='none' || this.propVisible=='') ? false : true,
            shower:''
        }
    },
    watch: {
        'propVisible'(val) {
            if (val=='none') {
                this.visible = false;
            }else{
                if(!this.visible){
                    this.visible = true;
                    this.runTimer();
                }

            }
        },
    },
    mounted(){
        if (this.visible) {
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
            let self = this;
            self.shower='show';

            this.$options.staticData.timer = setTimeout(this.close, this.propDelay);
        },
        close() {
            let self = this;
            this.onClose();
            this.$options.staticData.timer = null;
            this.shower='';
            setTimeout(function () {
                self.visible = false;
            },0)

        },
        destroyElement() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        transitionComplete(){
            console.log('this is complete')
        }
    }
}
