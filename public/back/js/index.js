$(function () {
  // 柱状图
  // 基于准备好的dom，初始化echarts实例
  var myChart1 = echarts.init(document.querySelector(".echarts_1"));

  // 指定图表的配置项和数据
  var option1 = {
    title: {
      // 标题文本
      text: '2017年注册人数'
    },
    // 提示框组件
    tooltip: {
      trigger: 'item'
    },
    // 图例
    legend: {
      data: ['人数']
    },
    // x轴的刻度
    xAxis: {
      data: ["1月", "2月", "3月", "4月", "5月", "6月"]
    },
    yAxis: {},
    series: [{
      name: '人数',
      // bar 柱状图, line 折线图, pie 饼图
      type: 'bar',
      data: [1000, 1200, 1400, 1800, 1200, 2500]
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);

  var myChart2 = echarts.init(document.querySelector(".echarts_2"));
  var option2 = {
    title: {
      // 标题文本
      text: '热门品牌销售',
      subtext: '2018年8月',
      x: 'center'
    },
    // 提示框组件
    tooltip: {
      // axis 坐标轴触发
      trigger: 'item',
      // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['阿迪','耐克','三叶草','阿迪王','匡威']
    },
    series: [{
      name: '品牌',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        {value:335, name:'阿迪'},
        {value:310, name:'耐克'},
        {value:234, name:'三叶草'},
        {value:135, name:'阿迪王'},
        {value:1548, name:'匡威'}
      ],
      itemStyle: {
        emphasis: {
           // 可以添加阴影效果
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]

  };
  myChart2.setOption(option2);
})