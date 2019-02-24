<template>
  <div id="app">
    <h1>Vue Milligram</h1>
    <vm-title :type="1">Oui</vm-title>
  </div>
</template>

<script>
import VmTitle from '@/components/Title.vue';

export default {
  name: 'vue-milligram',
  components: {
    VmTitle,
  },
};
</script>
