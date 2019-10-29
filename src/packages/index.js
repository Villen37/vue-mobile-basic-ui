/**
 * Created by Lzhang on 2018/10/24.
 */
import Modal from './packages/toast/toast.js';
import modalBox from './packages/toast/toast.js'
import Tabs from './packages/toast/toast.js';
import ListRoll from './packages/toast/toast.js';
import Tooltip from './packages/toast/toast.js';
import transitionCon from './packages/toast/toast.js';

import toast from './packages/toast/toast.js';

const components = {
    Modal,
    ScrollLoadingContainer,
    Tabs,
    ListRoll,
    Tooltip,
    transitionCon
};

const install = function (Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    for (let key in components) {
        const component = components[key];
        Vue.component(component.name, component);
    }
    Vue.prototype.$modalBox = modalBox;
    Vue.prototype.$toast = toast;
};

module.exports = {
    ...components,
    modalBox,
    toast,
    install,
}