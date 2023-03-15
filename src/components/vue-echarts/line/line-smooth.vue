<template>
    <div id="container">
        <v-chart ref="chart" class="chart" :option="option" />
        <h3>line-smooth</h3>
    </div>
</template>

<script>
export default {
    name: 'lineSmooth',
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
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }
                ]
            }
        }
    },
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