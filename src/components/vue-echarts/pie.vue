<template>
    <div id="container">
        <el-row>
            <el-col :span="8"><pie-simple></pie-simple></el-col>
            <el-col :span="8"><pie-border-radius></pie-border-radius></el-col>
        </el-row>
    </div>
</template>

<script>
import pieSimple from './pie/pie-simple.vue'
import pieBorderRadius from './pie/pie-borderRadius.vue';

export default {
    name: 'Pie',
    components: {
        pieSimple,
        pieBorderRadius,
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