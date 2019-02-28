<template>
  <div id="app">
    <h1>Vue Milligram</h1>
    <vm-title :type="1">Oui</vm-title>
    <vm-button outline>Bouton</vm-button>
    <vm-table :headers="tableHeaders" :items="tableValues"></vm-table>
    <vm-list :items="unorderedlistItems"></vm-list>
    <vm-list :items="orderedlistItems" list-element="ol"></vm-list>
  </div>
</template>

<script>
export default {
  name: 'vue-milligram',
  data() {
    return {
      tableHeaders: [{
        value: 'name',
        text: 'Name',
      }, {
        value: 'age',
        text: 'Age',
      }, {
        value: 'height',
        text: 'Height',
      }, {
        value: 'location',
        text: 'Location',
      }],
      tableValues: [{
        name: 'Stephen Curry',
        age: 27,
        height: '1,91',
        location: 'Akron, OH',
      }, {
        name: 'Klay Thompson',
        age: 25,
        height: '2,01',
        location: 'Los Angeles, CA',
      }],
      unorderedlistItems: [
        'Unordered list item 1',
        'Unordered list item 2',
      ],
      orderedlistItems: [
        'Ordered list item 1',
        'Ordered list item 2',
      ],
    };
  },
};
</script>

<style scopes>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
