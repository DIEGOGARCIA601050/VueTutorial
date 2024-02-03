<script setup>
import { ref, computed } from 'vue'
import App from './App.vue'
import LaGuerraDeReforma from './components/LaGuerraDeReforma.vue';
import NotFound from './components/NotFound.vue'
import Tutorial from './components/Tutorial.vue';

const routes = {
  '/': App,
  '/LaGuerraDeReforma': LaGuerraDeReforma,
  '/Tutorial': Tutorial
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="/">Home</a> |
  <a href='/#/LaGuerraDeReforma'>La Guerra de Reforma</a> |
  <a href="/#/Tutorial">Tutorial de Vue</a> |
  <component :is="currentView" />
</template>