<template>
    <div id="container">
        <v-chart class="chart" :option="option" />
        <h3>bar-tick-align</h3>
    </div>
</template>

<script>
export default {
    name: 'barTickAlign',
    computed: {
        option() {
            return {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
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