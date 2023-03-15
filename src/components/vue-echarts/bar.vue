<template>
    <div id="container">
        <el-row>
            <el-col :span="8"><bar-simple></bar-simple></el-col>
            <el-col :span="8"><bar-tick-align></bar-tick-align></el-col>
            <el-col :span="8"><bar-y-category></bar-y-category></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><mix-line-bar></mix-line-bar></el-col>
        </el-row>
    </div>
</template>

<script>
import barSimple from './bar/bar-simple.vue'
import barTickAlign from './bar/bar-tick-align.vue'
import barYCategory from './bar/bar-y-category.vue'
import mixLineBar from './bar/mix-line-bar.vue'

export default {
    name: 'Bar',
    components: {
        barSimple,
        barTickAlign,
        barYCategory,
        mixLineBar,
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