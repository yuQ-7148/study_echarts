<template>
    <v-chart class="chart" :option="option" />
</template>
  
<script>


export default {
    name: "MyECharts",
    data() {
        return {
            data: [
                { value: 23, name: 'Mon' },
                { value: 24, name: 'Tue' },
                { value: 18, name: 'Wed' },
                { value: 25, name: 'Thu' },
                { value: 27, name: 'Fri' },
                { value: 28, name: 'Sat' },
                { value: 30, name: 'Sun' },
            ],
        }
    },
    computed: {
        option() {
            return {
                xAxis: {
                    data: this.data.map(d => d.name)
                },
                yAxis: {},
                series: [
                    {
                        type: 'line',
                        data: this.data.map(d => d.value)
                    }
                ]
            }
        }
    },
    // mounted() {
    //     this.option.xAxis.data = this.data.map(d => d.name)
    //     console.log(this.data.map(d => d.value));
    //     console.log(this.option.series);
    //     this.option.series.data = this.data.map(d => d.value)
    // }
};
</script>
  
<style lang="less" scoped>
.chart {
    height: 400px;
    width: 650px;
}
</style>