<template>
    <div id="container">
        <el-row>
            <el-col :span="8"><scatter-simple></scatter-simple></el-col>
        </el-row>
    </div>
</template>

<script>
import scatterSimple from './scatter/scatter-simple.vue'

export default {
    name: 'Scatter',
    components: {
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