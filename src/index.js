/**
 * Created by villen on 2018/10/24.
 */
import toast from './packages/toast/toast.js';
import vbRollStop from './packages/roll-stop/index.vue';

const components = {
    toast,
    vbRollStop
};

const install = function (Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    for (let key in components) {
        const component = components[key];
        Vue.component(component.name, component);
    }
    Vue.prototype.$toast = toast;
};

module.exports = {
    ...components,
    install,
}