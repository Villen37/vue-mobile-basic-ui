/**
 * Created by Villen on 19/3/18.
 */

import withRender from "./index.vtpl";
import '../../assets/public.less';
import './index.less';

export default withRender({
    name: 'Modal',
    props: {
        name: {
          type: String,
          default: 'fade'
        },
        bgContainerCls: {
            type: String,
            default: 'default-bg-container'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            // type: String,
            default: ''
        },
        tipText: {
            type: String,
            default: ''
        },
        confirmBtnText: {
            type: String,
            default: '确认'
        },
        cancelBtnText: {
            type: String,
            default: '取消'
        },
        visibleProp: {
            type: String,
            default: 'none'
        },
        onClose: {
            type: Function,
            default: function () {
                //this.$emit('lisenChidrenEvent',{showShareModal:'block'})
            }
        },
        onCancel: {
            type: Function,
            default: function () {
            }
        },
        onConfirm: {
            type: Function,
            default: function () {

            }
        },
        showMask: {
            type: Boolean,
            default: true
        },
        isCanClickMask: {
            type: Boolean,
            default: false
        },
        showCloseIcon: {
            type: Boolean,
            default: true
        },
        showConfirmBtn: {
            type: Boolean,
            default: true
        },
        showCancelBtn: {
            type: Boolean,
            default: true
        },
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
        }
    },
    methods: {
        close() {
            this.onClose();
            this.visible = false;
        },
        cancel() {
            this.close();
            this.onCancel();
        },
        clickMask() {
            if (!this.isCanClickMask) return false;
            this.cancel();
        },
        confirm() {
            this.onConfirm();
            this.close();
        },
        destroyElement() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
    }
})
