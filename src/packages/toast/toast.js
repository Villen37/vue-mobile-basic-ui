import Vue from 'vue';
import toastOptions from './index.js';
import {isVNode} from '../../util/vdom';

const ToastConstructor = Vue.extend(toastOptions);
let instance;

export default function toast(options) {
  if (instance) {
    instance.vm.destroyElement();
  }
  instance = new ToastConstructor({
    propsData: {
      ...options,
      visibleProp: 'block',
    }
  });
  const closeFun = instance.close;
  instance.close = function () {
    closeFun();
    instance.destroyElement();
    instance = null;
  };
  if (isVNode(instance.msg)) {
    instance.$slots.default = [instance.content];
    instance.msg = null;
  } else {
    delete instance.$slots.default;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  // instance.vm.visible = 'block';
}


