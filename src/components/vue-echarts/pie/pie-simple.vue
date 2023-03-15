<template>
    <div id="container">
        <v-chart class="chart" :option="option" />
        <h3>line-simple</h3>
    </div>
</template>

<script>
export default {
    name: 'lineSimple',
    computed: {
        option() {
            return {
                title: {
                    text: 'Referer of a Website',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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