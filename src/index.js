/**
 * Created by villen on 2018/10/24.
 */
import vbRollStop from './packages/roll-stop/index.vue';
import vbPulldownRefresh from './packages/pulldown-refresh/index.vue';
import vbRollList from './packages/roll-list/index.vue';
import vbCoverLoading from './packages/cover-loading/index.vue';
import vbModalContainer from './packages/modal-container/index.vue';
import vbModalDialogue from './packages/modal-dialogue/modal.js';
import vbToast from './packages/toast/toast.js';

const components = {
    vbRollStop,
    vbPulldownRefresh,
    vbRollList,
    vbCoverLoading,
    vbModalContainer
};

const install = function (Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    for (let key in components) {
        const component = components[key];
        Vue.component(component.name, component);
    }
    Vue.prototype.$vbToast = vbToast;
    Vue.prototype.$vbModal = vbModalDialogue;
};

module.exports = {
    ...components,
    install,
    vbToast,
    vbModalDialogue
}