import VmTitle from '@/components/Title.vue';
import VmButton from '@/components/Button.vue';

export default {
  install(Vue) {
    // Components
    Vue.component('vm-title', VmTitle);
    Vue.component('vm-button', VmButton);
  },
};
