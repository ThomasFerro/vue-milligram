<template>
  <button @click="(e) => $emit('click', e)" class="button" :class="buttonModifers">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vue-milligram-button',
  props: {
    outline: Boolean,
    clear: Boolean,
  },
  computed: {
    buttonModifers() {
      return {
        'button-outline': this.outline,
        'button-clear': this.clear,
      };
    },
  },
};
</script>
