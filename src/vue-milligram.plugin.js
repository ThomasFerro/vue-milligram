import VmTitle from '@/components/Title.vue';
import VmButton from '@/components/Button.vue';
import VmTable from '@/components/Table.vue';
import VmList from '@/components/List.vue';

export default {
  install(Vue) {
    // Components
    Vue.component('vm-title', VmTitle);
    Vue.component('vm-button', VmButton);
    Vue.component('vm-table', VmTable);
    Vue.component('vm-list', VmList);
  },
};
