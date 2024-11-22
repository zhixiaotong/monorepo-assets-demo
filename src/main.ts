import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' })
  });

app.use(router)
app.mount('#app')
