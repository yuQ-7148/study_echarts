<template>
    <div id="container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="less" scoped>
#container {
    height: 100%;
    width: 100%;
}
</style>