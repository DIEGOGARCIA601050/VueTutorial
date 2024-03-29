import './assets/main.css'

import { createRouter, createWebHashHistory} from 'vue-router'
import { createApp } from 'vue'

// 1. Define route components.
// These can be imported from other files
import App from './App.vue'
import LaGuerraDeReforma from './components/LaGuerraDeReforma.vue'
import Tutorial from './components/Tutorial.vue'
import LaRevolucion from './components/LaRevolucion.vue'



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: App },
  { path: '/LaGuerraDeReforma', component: LaGuerraDeReforma },
  { path: '/Tutorial', component: Tutorial},
  { path: '/La-Revolución', component: LaRevolucion }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})



const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
