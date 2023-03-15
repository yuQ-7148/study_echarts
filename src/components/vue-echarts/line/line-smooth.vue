<template>
    <div id="container">
        <v-chart theme="dark" class="chart" :option="option"/>
        <h3>line-smooth</h3>
    </div>
</template>

<script>
export default {
    name: 'lineSmooth',
    computed: {
        option() {
            return {
                title: {
                    text: 'zhexian',
                    left: 'left',
                    subtext: 'fubiaoti',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['count', 'score'],
                },
                xAxis: {
                    type: 'category',
                    //x轴刻度与标题对齐----------------------------------------------------
                    // boundaryGap: false,
                    axisTick: {
                        alignWithLabel: true
                    },
                },
                yAxis: {},
                series: [
                    {
                        name: 'count',
                        type: 'line',
                        smooth: true,
                        color: '#fff',
                    },
                    {
                        name: 'score',
                        type: 'bar',
                        smooth: true,
                    },
                ],

                //按列传入数据（方式一）-------------------------------------------------------------------------------------------------
                // dataset: {
                //     source: [
                //         ['weekday', 'count', 'score'],
                //         ['Mon', 820, 840],
                //         ['Tue', 920, 952],
                //         ['Wed', 901, 911],
                //         ['Thu', 934, 914],
                //         ['Fri', 1290, 1340],
                //         ['Sat', 1330, 1110],
                //         ['Sun', 1320, 1320],
                //     ]
                // },

                //按列传入数据（方式二）-------------------------------------------------------------------------------------------------
                // dataset: {
                //     source: [
                //         { weekday: 'Mon', count: 820, score: 840 },
                //         { weekday: 'Tue', count: 920, score: 952 },
                //         { weekday: 'Wed', count: 901, score: 911 },
                //         { weekday: 'Thu', count: 934, score: 914 },
                //         { weekday: 'Fri', count: 1290, score: 1340 },
                //         { weekday: 'Sat', count: 1330, score: 1110 },
                //         { weekday: 'Sun', count: 1320, score: 1320 },
                //     ]
                // },

                //按行传入数据----------------------------------------------------------------------------------------------------------
                dataset: {
                    source: {
                        'weekday': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        'count': [820, 932, 901, 934, 1290, 1330, 1320],
                        'score': [840, 952, 911, 914, 1340, 1110, 1320],
                    }
                },
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