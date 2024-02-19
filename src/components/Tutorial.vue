<script setup>
import { ref } from 'vue'

import HelloName from './HelloName.vue';

const fruits = [
  {
    "name": "apple",
    "description": "a round fruit with a red or green skin",
    "price": "1.00"
  },
  {
    "name": "banana",
    "description": "a long curved fruit with a yellow skin",
    "price": "0.50"
  },
  {
    "name": "orange",
    "description": "a round citrus fruit with a tough bright reddish-yellow rind",
    "price": "0.75"
  },
  {
    "name": "grape",
    "description": "a small, round, smooth-skinned fruit, usually purple, red, or green",
    "price": "2.00"
  },
  {
    "name": "watermelon",
    "description": "a large, round fruit with a green skin and sweet watery red or occasionally yellow flesh",
    "price": "5.00"
  },
  {
    "name": "strawberry",
    "description": "a sweet soft red fruit with a seed-studded surface",
    "price": "3.50"
  },
  {
    "name": "pineapple",
    "description": "a large juicy tropical fruit consisting of aromatic edible yellow flesh surrounded by a tough segmented skin and topped with a tuft of stiff leaves",
    "price": "4.50"
  },
  {
    "name": "kiwi",
    "description": "a brown, hairy fruit with a bright green flesh and tiny black seeds",
    "price": "2.50"
  },
  {
    "name": "mango",
    "description": "a large oval tropical fruit with a smooth green or red skin, orange-yellow flesh, and a hard inedible stone",
    "price": "3.00"
  },
  {
    "name": "pear",
    "description": "a sweet yellowish- or brownish-green edible fruit that is typically narrow at the stalk and wider towards the base",
    "price": "1.50"
  }
]
const numbers = ["peru", "red", "blue"]
let count = ref(3)
const name = 'Vue.js'
let active = ref(true)
const Usuario = null
const resultado = false

function greet(event) {
  console.log(`Hello ${name}!`)
  active = !active
  console.log(active);
  return active
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
  <div class="all">
    <div>{{ mensaje }}</div>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />


    <HelloName nombresito="Dan"></HelloName>
    <HelloName nombresito="Luis"></HelloName>
    <HelloName nombresito="Abraham"></HelloName>
  </header>
  <div class="wrapper">
    <h3>Colores</h3>
    <ol>
      <li v-for="(item, index) in numbers" :key="index" :style="`color:${item}`">{{ `Soy ${item}` }}</li>
    </ol>
    <h3>Buy</h3>
    <table>
      <td class="tdTop"><h2>Fruit</h2></td>
      <td class="tdTop"><h2>Description</h2></td>
      <td class="tdRigth tdTop"><h2>Price</h2></td>
      <tbody v-for="item in fruits" :key="item?.name">
      <td>{{ item.name }}</td>
      <td>{{ item.description }}</td>
      <td class="tdRigth">{{ item.price }}</td>
    </tbody>
    </table>
      
      <p>{{ (() => 1-2)() }}</p>
    </div>
  <!-- `greet` is the name of the method defined above -->
  <button class="button-count" @click="greet">Greet</button>
    <button class="button-count" @click="count--"> - </button>
    <p class="count">{{ count }}</p>
    <button class="button-count" type="button" @click="count++"> + </button>
  
    
    <p>{{ Usuario ? 'resultado' : 'null' }}</p>
    <p v-if="active">{{ active }}</p>
    <p v-else-if="!active">No hay resultado</p>
    <p v-show="active">Establecido en verdadero</p>
    <p v-show="count">Activo</p>
  </div>
</template>

<style scoped>

.tdTop {
  border-top: none;
}

.tdRigth {
  border-right: none;
}

td {
  border-top: solid rgba(169, 238, 238, 0.356);
  border-right: solid rgba(169, 238, 238, 0.356);
}

table {
  border: solid;
}

tbody {
  background-color: azure;
}
.all {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

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