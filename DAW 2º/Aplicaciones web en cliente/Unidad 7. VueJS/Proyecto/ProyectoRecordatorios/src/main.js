import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase.js'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Recordatorios from './components/Recordatorios.vue'
import Landing from './components/Landing.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/recordatorios', component: Recordatorios },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//createApp(App).mount('#app')

const app = createApp(App)  
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        // we will see other modules later on
        VueFireAuth(),
    ],
})


app.use(router);
app.mount('#app')
