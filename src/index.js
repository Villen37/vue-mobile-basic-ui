/**
 * Created by villen on 2018/10/24.
 */
import Toast from './packages/toast/index.js';


const components = {
    Toast,
};

const install = function (Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    for (let key in components) {
        const component = components[key];
        Vue.component(component.name, component);
    }
    //Vue.prototype.$modalBox = modalBox;
    Vue.prototype.$toast = Toast;
};

module.exports = {
    ...components,
    install,
}