<template>
    <div id="container">
        <v-chart class="chart" :option="option" />
        <h3>scatter-simple</h3>
    </div>
</template>

<script>
export default {
    name: 'scatterSimple',
    computed: {
        option() {
            return {
                xAxis: {},
                yAxis: {},
                series: [
                    {
                        symbolSize: 20,
                        data: [
                            [10.0, 8.04],
                            [8.07, 6.95],
                            [13.0, 7.58],
                            [9.05, 8.81],
                            [11.0, 8.33],
                            [14.0, 7.66],
                            [13.4, 6.81],
                            [10.0, 6.33],
                            [14.0, 8.96],
                            [12.5, 6.82],
                            [9.15, 7.2],
                            [11.5, 7.2],
                            [3.03, 4.23],
                            [12.2, 7.83],
                            [2.02, 4.47],
                            [1.05, 3.33],
                            [4.05, 4.96],
                            [6.03, 7.24],
                            [12.0, 6.26],
                            [12.0, 8.84],
                            [7.08, 5.82],
                            [5.02, 5.68]
                        ],
                        type: 'scatter'
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