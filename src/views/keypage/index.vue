<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple titleKey">
                    <img src="../../assets/1.png" alt="">
                    <div >
                        <span>访问量</span>
                        <span>1000</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple titleKey">
                    <img src="../../assets/message.png" alt="">
                    <div>
                        <span>反馈数</span>
                        <span>200</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple titleKey">
                    <img src="../../assets/money.png" alt="">
                    <div>
                        <span>总价</span>
                        <span>0</span>
                    </div>
                </div></el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple titleKey">
                    <img src="../../assets/shop.png" alt="">
                    <div>
                        <span>购物车</span>
                        <span>200</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div id="myChart" :style="{width: '100%', height: '400px',background:'#FFFFFF'}"></div>
    </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var colors = ['#5793f3', '#d14a61', '#675bba'];
      // 绘制图表
      myChart.setOption({
        color: colors,

        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['2015 降水量', '2016 降水量']
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '降水量  ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '降水量  ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '2015 降水量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
          }
        ]
      });
    }
  }
}
</script>
<style lang='less'>
    .container{
        width:100%;
        height:100%;
        .titleKey{
            width:100%;
            height:auto;
            background: #FFFFFF;
            img{
                display: inline-block;
                height:50px;
                width:50px;
                margin:20px;
                margin-left:30px;
                vertical-align: middle;
            }
            div{
                display: inline-block;
                vertical-align: middle;
                margin-left:20px;
                text-align: center;
                span{
                    display: block;
                    margin-bottom: 10px;
                }
            }
        }
    }
    #myCharts{
      background: #FFFFFF;
    }
    .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #ebedf1;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
