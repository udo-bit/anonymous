import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"

import "@unocss/reset/tailwind.css"
import 'virtual:uno.css'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App)
    .use(router)
    .mount('#app')
