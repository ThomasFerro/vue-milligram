<template>
  <div id="app">
    <h1>Vue Milligram</h1>
    <vm-title :type="1">Oui</vm-title>
    <vm-button outline>Bouton</vm-button>
    <vm-table :headers="tableHeaders" :items="tableValues"></vm-table>
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
    };
  },
};
</script>
