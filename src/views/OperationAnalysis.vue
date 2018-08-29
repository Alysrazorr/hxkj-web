<template>
  <div class="root">
    <el-row type="flex" :gutter="20">
      <el-col>
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>委托合同月份分布统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="wthtyffbChart"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="20" style="margin-top: 20px;">
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>合作公司增长统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="hzgszzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>委托合同增长统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="wthtzzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计委托金额增长统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="ljwtjezzChart"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="20" style="margin-top: 20px;">
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计回收金额增长统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="ljhsjezzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计委托车辆增长统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="ljwtclzzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计回收车辆增长统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div id="ljhsclzzChart"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      this.wthtyffb()
      this.hzgszz()
      this.wthtzz()
      this.ljwtjezz()
      this.ljhsjezz()
      this.ljwtclzz()
      this.ljhsclzz()
    })
  },
  methods: {
    wthtyffb () {
      var chart = this.$echarts.init(document.getElementById('wthtyffbChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    },
    hzgszz () {
      var chart = this.$echarts.init(document.getElementById('hzgszzChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    },
    wthtzz () {
      var chart = this.$echarts.init(document.getElementById('wthtzzChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    },
    ljwtjezz () {
      var chart = this.$echarts.init(document.getElementById('ljwtjezzChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    },
    ljhsjezz () {
      var chart = this.$echarts.init(document.getElementById('ljhsjezzChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    },
    ljwtclzz () {
      var chart = this.$echarts.init(document.getElementById('ljwtclzzChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    },
    ljhsclzz () {
      var chart = this.$echarts.init(document.getElementById('ljhsclzzChart'), 'light')
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }

      var option = {
        title: false,
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
div.root {
  padding: 20px;
  overflow: auto;

  div#wthtyffbChart {
    height: 500px;
  }
  div#hzgszzChart,
  div#wthtzzChart,
  div#ljwtjezzChart,
  div#ljhsjezzChart,
  div#ljwtclzzChart,
  div#ljhsclzzChart {
    height: 300px;
  }
}

.card-chart {
  .card-chart-header > span {
    user-select: none;
    font: {
      size: 25px;
      weight: 100;
      family: 'simhei';
    }
  }
}
</style>
