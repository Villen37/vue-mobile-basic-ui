import Vue from 'vue';
import toastOptions from './index.vue';
import {isVNode} from '../../util/vdom';

const ToastConstructor = Vue.extend(toastOptions);
let instance;
let nId=1;

export default function vbToast(options) {
  if (instance) {
    instance.vm.destroyElement();
  }
  instance = new ToastConstructor({
    propsData: {
      ...options,
      visibleProp: 'block',
      onType: 'js',
    }
  });
  const closeFun = instance.close;
  instance.close = function () {
    closeFun();
    setTimeout(()=>{
        instance.destroyElement();
        instance = null;
    },300)
  };
  if (isVNode(instance.msg)) {
    instance.$slots.default = [instance.content];
    instance.msg = null;
  } else {
    delete instance.$slots.default;
  }
  instance.vm = instance.$mount();
  let dom = instance.vm.$el
  document.body.appendChild(dom);
  dom.style.zIndex = nId + 100;
  dom.classList.add('js-toast');
  setTimeout(()=>{
      dom.classList.add('js-toast-show');
  },20)


  //instance.vm.visible = 'block';
}


