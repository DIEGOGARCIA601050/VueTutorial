<template>
  <h2>Actos Importantes</h2>
    <div>
      <div v-for="(item, index) in miArray" :key="index">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      miArray: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  