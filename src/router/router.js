import { createRouter, createWebHashHistory } from "vue-router";
import MyECharts from '../components/MyECharts.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/echarts', component: MyECharts }
    ]
})

export default router