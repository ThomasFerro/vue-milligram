<template>
  <table>
    <thead v-if="hasHeaders">
      <tr>
        <th v-for="(header, index) in headers" :key="getHeaderKey(header, index)">
          <slot name="header" :header="header">{{ getHeaderText(header) }}</slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="getItemKey(item, index)">
        <slot name="item" :item="item">
          <td
            v-for="(header, headerIndex) in headers"
            :key="`item-${getItemKey(item, index)}-${getHeaderKey(header, headerIndex)}`"
          >
            <slot name="item-value" :item="item" :value="getItemValue(item, header)">
              {{ getItemValue(item, header) }}
            </slot>
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'vue-milligram-table',
  props: {
    headers: {
      type: Array,
      default() {
        return [];
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    hasHeaders() {
      return this.headers && this.headers.length > 0;
    },
  },
  methods: {
    getHeaderKey(header, index) {
      return (header && header.value) || index;
    },
    getHeaderText(header) {
      return (header && header.text) || '';
    },
    getItemKey(item, index) {
      return (item && item.value) || index;
    },
    getItemValue(item, header) {
      if (!item || !header || !header.value || !item[header.value]) {
        return '';
      }

      return item[header.value];
    },
  },
};
</script>
