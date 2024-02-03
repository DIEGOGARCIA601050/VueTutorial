<script setup>
import { ref } from 'vue'

import HelloName from './HelloName.vue';

const numbers = ["peru", "red", "blue"]
let count = ref(3)
const name = 'Vue.js'
let active = true
const Usuario = null
const resultado = false

function greet(event) {
  console.log(`Hello ${name}!`)
  active = !active
}
</script>
<script>
     export default {
      async mounted() {
      const { text } = await (await fetch("/api/message")).json();
      this.mensaje = text;
    }}
</script>
<template>
  <div>{{ mensaje }}</div>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />


    <HelloName nombresito="Dan"></HelloName>
    <HelloName nombresito="Luis"></HelloName>
    <HelloName nombresito="Abraham"></HelloName>
  </header>
  <div class="wrapper">
      <p :style="`color:${numbers[0]}`">{{ `Soy ${numbers[0]}` }}</p>
      <p :style="`color:${numbers[1]}`">{{ `Soy ${numbers[1]}` }}</p>
      <p :style="`color:${numbers[2]}`">{{ `Soy ${numbers[2]}` }}</p>
      <p>{{ (() => 1-2)() }}</p>
    </div>
  <!-- `greet` is the name of the method defined above -->
  <button class="event" @click="greet">Greet</button>
    <button class="button-count" @click="count = count - 1"> - </button>
    <p class="count">{{ count }}</p>
    <button class="button-count" type="button" @click="count++"> + </button>
  
    
    <p>{{ Usuario ? 'resultado' : 'null' }}</p>
    <p v-if="!resultado">null</p>
    <p v-else>{{ count-- }}</p>
    <p v-show="active">Activo</p>
    <p v-show="count">Activo</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.logo :hover {
  background-color: green;
}

.Initial {
  color: yellowgreen;
}

</style>