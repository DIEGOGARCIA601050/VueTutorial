<template>
  <h2>Actos Importantes</h2>
    <div>
      <p v-for="(item, index) in miArray" :key="index">
        {{ item }}
      </p>
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
  