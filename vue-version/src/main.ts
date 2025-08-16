import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { ViFileTypeReactjs, ViFileTypeVue } from "oh-vue-icons/icons";


addIcons(ViFileTypeReactjs, ViFileTypeVue);

const app = createApp(App)

app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
