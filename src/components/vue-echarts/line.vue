<template>
    <div id="container">
        <el-row>
            <el-col :span="8"><line-simple></line-simple></el-col>
            <el-col :span="8"><line-smooth></line-smooth></el-col>
            <el-col :span="8"><line-stack></line-stack></el-col>
        </el-row>
    </div>
</template>

<script>
import lineSimple from './line/line-simple.vue'
import lineSmooth from './line/line-smooth.vue'
import lineStack from './line/line-stack.vue'

export default {
    name: 'Line',
    components: {
        lineSimple,
        lineSmooth,
        lineStack,
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