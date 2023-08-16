import { createApp } from 'vue'
import './style.css'
import App from "./App.vue"

// https://teratail.com/questions/5tvqmq0aa6cg4u
// これでApp.vueからの型宣言エラーを解消
createApp(App).mount('#app')
