import Vue from 'vue';
import modalOptions from './index.vue';
import {isVNode} from '../../util/vdom';

const ModalConstructor = Vue.extend(modalOptions);
let instance;

// export default function modal(options) {
//   if (instance) {
//     instance.vm.destroyElement();
//   }
//   instance = new ModalConstructor({
//     propsData: {
//       ...options,
//       propvisible: 'block',
//     }
//   });
//   const closeFun = instance.close;
//   instance.close = function () {
//     closeFun();
//     instance.destroyElement();
//     instance = null;
//   };
//   if (isVNode(instance.content)) {
//     instance.$slots.default = [instance.content];
//     instance.content = null;
//   } else {
//     delete instance.$slots.default;
//   }
//   instance.vm = instance.$mount();
//   document.body.appendChild(instance.vm.$el);
//   // instance.vm.visible = 'block';
// }

export default function modal(options) {
    if (!instance) {
        instance = new ModalConstructor({
            propsData: {
                ...options,
                propvisible: 'block',
            }
        });
        const closeFun = instance.close;
        instance.close = function () {
            closeFun();
            instance.propvisible = 'none';
        };
        handleSlot();
        instance.vm = instance.$mount();
        let dom = instance.vm.$el
        document.body.appendChild(dom);
        dom.style.zIndex = 1000;
        setTimeout(()=>{
            dom.classList.add('show');
        },20)

    } else {
        Object.assign(instance, options);
        handleSlot();
        instance.propvisible = 'block';
    }

    function handleSlot() {
        if (isVNode(options.content)) {
            instance.$slots.default = [options.content];
            instance.content = null;
        } else {
            delete instance.$slots.default;
        }
    }

}



