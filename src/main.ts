import { createApp } from 'vue'
import { apolloProvider } from '@/apollo'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(apolloProvider).use(router).mount('#app')
