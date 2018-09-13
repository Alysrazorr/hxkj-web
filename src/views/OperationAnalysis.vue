<template>
  <div class="root">
    <el-row type="flex" :gutter="20">
      <el-col>
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>委托合同月份分布统计</span>
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('wthtyffbChart')"></el-button>
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
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('hzgszzChart')"> 导出</el-button>
          </div>
          <div id="hzgszzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>委托合同增长统计</span>
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('wthtzzChart')"> 导出</el-button>
          </div>
          <div id="wthtzzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计委托金额增长统计</span>
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('ljwtjezzChart')"> 导出</el-button>
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
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('ljhsjezzChart')"> 导出</el-button>
          </div>
          <div id="ljhsjezzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计委托车辆增长统计</span>
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('ljwtclzzChart')"> 导出</el-button>
          </div>
          <div id="ljwtclzzChart"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-chart" shadow="hover">
          <div slot="header" class="clearfix card-chart-header">
            <span>累计回收车辆增长统计</span>
            <el-button style="float: right;" type="primary" class="el-icon-printer" @click="saveAsPicture('ljhsclzzChart')"> 导出</el-button>
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
    saveAsPicture (chartId) {
      var myChart = this.$echarts.getInstanceByDom(document.getElementById(chartId))
      var url = myChart.getConnectedDataURL({
        pixelRatio: 5, // 导出的图片分辨率比率,默认是1
        backgroundColor: '#fff', // 图表背景色
        excludeComponents: [// 保存图表时忽略的工具组件,默认忽略工具栏
          'toolbox'
        ],
        type: 'png'// 图片类型支持png和jpeg
      })
      var $a = document.createElement('a')
      var type = 'png'
      $a.download = myChart.getOption().title[0].text + '.' + type
      $a.target = '_blank'
      $a.href = url
      // Chrome and Firefox
      if (typeof MouseEvent === 'function') {
        var evt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false
        })
        $a.dispatchEvent(evt)
      } else { // IE
        var html = '' +
                '<body style="margin:0;">' +
                '<img src="' + url + '" style="max-width:100%;" title="' + myChart.getOption().title[0].text + '" />' +
                '</body>'
        var tab = window.open()
        tab.document.write(html)
      }
    },
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
        title: {
          text: '委托合同增长统计',
          show: false
        },
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: false,
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

      var option = {
        title: {
          text: '合作公司增长统计',
          show: false
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['蒸发量', '降水量']
        },
        toolbox: false,
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      }
      chart.setOption(option)
    },
    wthtzz () {
      var chart = this.$echarts.init(document.getElementById('wthtzzChart'), 'light')

      var option = {
        title: {
          text: '委托合同增长统计',
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: false,
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
      chart.setOption(option)
    },
    ljwtjezz () {
      var chart = this.$echarts.init(document.getElementById('ljwtjezzChart'), 'light')

      var option = {
        title: {
          text: '累计委托金额增长统计',
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
      chart.setOption(option)
    },
    ljhsjezz () {
      var chart = this.$echarts.init(document.getElementById('ljhsjezzChart'), 'light')

      var option = {
        title: {
          text: '累计回收金额增长统计',
          show: false
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
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
        title: {
          text: '累计委托车辆增长统计',
          show: false
        },
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: false,
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
        title: {
          text: '累计回收车辆增长统计',
          show: false
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
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
