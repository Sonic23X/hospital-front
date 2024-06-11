import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.min.js";
import './assets/scss/app.scss';
import Breadcrumbs from './layout/breadCrumbs.vue';
import VueApexCharts from "vue3-apexcharts";
import VueCountdown from '@chenfengyuan/vue-countdown';
import Lightbox from 'vue-easy-lightbox'
import VueNumber from "vue-number-animation";
import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css"
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
// import DropZone from 'dropzone-vue';
import VueFeather from "vue-feather";
import Vue3Tour from 'vue3-tour'
import Toaster from "@meforma/vue-toaster";
import vueChartist from "vue-chartist"
import 'vue3-tour/dist/vue3-tour.css'
import {VueMasonryPlugin} from 'vue-masonry';
import AosVue from "aos-vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import 'form-wizard-vue3/dist/form-wizard-vue3.css';
import Wizard from 'form-wizard-vue3';
import { quillEditor } from "vue3-quill";
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import Notifications from '@kyvg/vue3-notification'
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

import { createI18n } from 'vue-i18n'
import English from "./locales/en.json"
import German from "./locales/ge.json"
import Russian from "./locales/ru.json"
import Arabic from "./locales/ar.json"
import Español from "./locales/es.json"
import Deutsch from "./locales/de.json"
import Français from "./locales/fr.json"
import Português from "./locales/pt.json"
import 简体中文 from "./locales/cn.json"
import لعربية from "./locales/ae.json"
const i18n = createI18n({ legacy: false, // you must specify 'legacy: false' option
  locale: '',
  messages: {
   English: English,
   Español: Español,
   Deutsch: Deutsch,
   Français: Français,   
  Português: Português,
   简体中文: 简体中文,
   لعربية: لعربية,
    German: German,
    Russian: Russian,
    Arabic: Arabic
    }
  })


createApp(App)
.use(Notifications)
.use(store)
.use(router)
.use(VueApexCharts)
.use(Lightbox)
.use(VueNumber)
.use(rate)
.use(i18n)
.use(SimpleTypeahead)
.use(VueSweetalert2)
.use(PerfectScrollbar)
// .use(DropZone)
.use(VCalendar, {})
.use(Vue3Tour)
.use(Toaster)
.use(vueChartist)
.use(AosVue)
.use(Wizard)
.use(quillEditor)
.component(VueFeather.name, VueFeather)
.component('Breadcrumbs', Breadcrumbs)
.component('multiselect', Multiselect)
.component('Datepicker', Datepicker)
.component(VueCountdown.name, VueCountdown)
.use(VueMasonryPlugin)
.mount('#app')
