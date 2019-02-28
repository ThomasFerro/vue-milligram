<template>
  <transition-group name="list" :tag="listElement">
    <component
      :is="itemElement"
      v-for="(item, index) in items"
      :key="getItemKey(item, index)"
    >{{ item }}
    </component>
  </transition-group>
</template>

<script>
export default {
  name: 'vue-milligram-list',
  props: {
    listElement: {
      type: String,
      default: 'ul',
    },
    itemElement: {
      type: String,
      default: 'li',
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getItemKey(item, index) {
      return item || index;
    },
  },
};
</script>
