<template>
    <div id="container">
        <!-- <router-view></router-view> -->
        <el-row>
            <el-col :span="8"><line-simple></line-simple></el-col>
            <el-col :span="8"><pie-simple></pie-simple></el-col>
            <el-col :span="8"><scatter-simple></scatter-simple></el-col>
        </el-row>
    </div>
</template>

<script>
import lineSimple from './components/vue-echarts/line-simple.vue'
import pieSimple from './components/vue-echarts/pie-simple.vue'
import scatterSimple from './components/vue-echarts/scatter-simple.vue'

export default {
    name: 'App',
    components: {
        lineSimple,
        pieSimple,
        scatterSimple,
    }
}
</script>

<style lang="less" scoped>
#container {
    height: 100%;
    width: 100%;
    .el-row{
        width: 100%;
        height: 450px;
    }
}
</style>