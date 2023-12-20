<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloName from './components/HelloName.vue';
const numbers = ["peru", "red", "blue"]
let count = ref(3)
const name = 'Vue.js'

function greet(event) {
  console.log(`Hello ${name}!`)
  count--
  // `event` is the native DOM event
  if (event) {
    count = count - 1
    alert(event.target.tagName)
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" msg2="You've successfully create a project with vite + vue" class="Initial" />
      <HelloWorld msg="Vue" msg2=" version 3" />
      <HelloWorld msg="Hola edmundo " msg2="Si funcionó" />
      <p :style="`color:${numbers[0]}`">{{ `Soy ${numbers[0]}` }}</p>
      <p :style="`color:${numbers[1]}`">{{ `Soy ${numbers[1]}` }}</p>
      <p :style="`color:${numbers[2]}`">{{ `Soy ${numbers[2]}` }}</p>
      <p>{{ (() => 1-2)() }}</p>
    </div>
    <HelloName nombresito="Dan"></HelloName>
    <HelloName nombresito="Luis"></HelloName>
    <HelloName nombresito="Abraham"></HelloName>
    <!-- `greet` is the name of the method defined above -->
    <button @click="greet">Greet</button>
    <button @click="count = count - 1"></button>
    <button type="button" @click="count++">count is {{ count }}</button>
  
    <p>{{ count }}</p>
  </header>
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
