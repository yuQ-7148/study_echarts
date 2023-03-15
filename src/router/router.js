import { createRouter, createWebHashHistory } from "vue-router";
import MyECharts from '../components/MyECharts.vue'
import Line from '../components/vue-echarts/line.vue'
import Pie from '../components/vue-echarts/pie.vue'
import Scatter from '../components/vue-echarts/scatter.vue'
import Bar from '../components/vue-echarts/bar.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/echarts', component: MyECharts },
        { path: '/line', component: Line },
        { path: '/pie', component: Pie },
        { path: '/scatter', component: Scatter },
        { path: '/bar', component: Bar },
    ]
})

export default router