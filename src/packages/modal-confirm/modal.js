import Vue from 'vue';
import modalOptions from './index.js';
import {isVNode} from '../../util/vdom';

const ModalConstructor = Vue.extend(modalOptions);
let instance;

export default function modal(options) {
  if (instance) {
    instance.vm.destroyElement();
  }
  instance = new ModalConstructor({
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
  if (isVNode(instance.content)) {
    instance.$slots.default = [instance.content];
    instance.content = null;
  } else {
    delete instance.$slots.default;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  // instance.vm.visible = 'block';
}


