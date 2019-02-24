<template>
  <component :is="headerType">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'vue-milligram-title',
  props: {
    type: {
      type: Number,
      default: 1,
      validator(type) {
        return type >= 1 && type <= 6;
      },
    },
  },
  computed: {
    headerType() {
      return `h${this.type}`;
    },
  },
};
</script>
