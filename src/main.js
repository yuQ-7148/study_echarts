import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VChart from "vue-echarts";
import "echarts";

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.component('v-chart',VChart)
app.mount('#app')
