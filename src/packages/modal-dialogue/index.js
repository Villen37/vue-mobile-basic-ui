/**
 * Created by villen on 2019/11/27.
 */

export default {
    name: 'vbModalDialogue',
    props: {
        propBgClass: {
            type: String,
            default: 'default-bg-container'
        },
        propTitle: {
            type: String,
            default: ''
        },
        propContent: {
            // type: String,
            default: ''
        },
        propTip: {
            type: String,
            default: ''
        },
        propConfirmText: {
            type: String,
            default: '确认'
        },
        propCancelText: {
            type: String,
            default: '取消'
        },
        propVisible: {
            default: false
        },
        onClose: {
            type: Function,
            default: function () {
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
        }
    },
    data() {
        return {
            visible: this.propVisible,
            showModalClass:''
        }
    },
    mounted(){
    },
    watch: {
        'propVisible'(val) {
            if (this.visible !== val) {
                this.visible = true;
                setTimeout(()=>{
                    this.showModalClass='show'
                },10)
            }
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.showModalClass='';
            this.onClose();
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
}
