import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/scss/app.scss"
import VueFeather from "vue-feather";
import Breadcrumbs from './layout/breadCrumbs.vue';

createApp(App)
.use(store)
.use(router)
.component(VueFeather.name, VueFeather)
.component('Breadcrumbs', Breadcrumbs)
.mount('#app')
