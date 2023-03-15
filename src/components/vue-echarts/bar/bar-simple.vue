<template>
    <div id="container">
        <v-chart class="chart" :option="option" />
        <h3>bar-simple</h3>
    </div>
</template>

<script>
export default {
    name: 'barSimple',
    computed: {
        option() {
            return {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
#container {
    position: relative;

    .chart {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        height: 400px;
        width: 600px;
        border: 1px solid black;
    }

    h3 {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
    }
}
</style>