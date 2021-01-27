(function () {
    $('.monitor .tabs').on('click', 'a', function () {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass('active');
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    })
    $(".marquee-view .marquee").each(function () {
        // console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();
//配置数据
function setData(myChart, option) {
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
};
(function () {//订单切换
    var data = [//数据
        { orders: '20,301,987', amount: '99834' },
        { orders: '301,987', amount: '9834' },
        { orders: '1,987', amount: '3834' },
        { orders: '987', amount: '834' }
    ]
    console.log(data);
    var $h4Orders = $('.order h4:eq(0)')
    // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function () {
        num = $(this).index()
        $(this).addClass('active').siblings('a').removeClass('active')
        var index = $(this).index()
        // console.log(data[this.dataset.key]);
        $h4Orders.html(data[index].orders)
        $h4Amount.html(data[index].amount)
    })
    var num = 0
    var timer = setInterval(function () {
        num++
        num = num < 4 ? num : 0
        $('.filter a').eq(num).click()
    }, 2000)
    $('.order .inner').on({
        mouseenter: function () {
            clearInterval(timer)
        },
        mouseleave: function () {
            timer = setInterval(function () {
                num++
                num = num < 4 ? num : 0
                $('.filter a').eq(num).click()
            }, 2000)
        }
    })
})();
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [
            {
                name: "面积模式",
                type: "pie",
                radius: ['10%', '70%'],
                center: ["50%", "50%"],
                roseType: "radius",
                label: {
                    fontSize: 12
                },
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };

    // 3. 配置项和数据给我们的实例化对象
    setData(myChart, option)
})();
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2. 指定配置和数据
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            // extraCssText: 'opacity:0'
            show: false
        },
    }
    var option = {
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            // show: false,
            trigger: 'item',
            // 轴触发提示才有效
            // axisPointer: {
            //     // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
            //     type: 'shadow'
            // }
        },
        // 图表边界控制
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'pink' // 0% 处的颜色
            }, {
                offset: 1, color: 'skyblue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        grid: {
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },

        // 控制x轴
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                // 刻度设置
                axisTick: {
                    // true意思：图形和刻度居中中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    // 不显示刻度
                    show: false
                },
                // x坐标轴文字标签样式设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                // x坐标轴颜色设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                }
            }
        ],
        // 控制y轴
        // 控制y轴
        yAxis: [
            {
                // 使用类目，必须有data属性
                type: 'value',
                // 使用 data 中的数据设为刻度文字
                // 刻度设置
                axisTick: {
                    // 不显示刻度
                    show: false
                },
                // y坐标轴文字标签样式设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                // y坐标轴颜色设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width: 8, //x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
                // y轴 分割线的样式 
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.2)'
                    }
                }
            }
        ],
        // 控制x轴
        series: [
            {
                // 图表数据名称
                name: '用户统计',
                // 图表类型
                type: 'bar',
                // 柱子宽度
                barWidth: '60%',
                // 数据
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
            }

        ]
    };
    // 3. 把配置给实例对象
    setData(myChart, option)
})();
(function () {
    var myChart = echarts.init(document.querySelector('.line'))
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var option = {
        // animation: false,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%', // 距离右边10%
            data: ['预期销售额', '实际销售额']
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['skyblue', 'pink'],
        series: [
            {
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                smooth: true,
                // stack: '总量'
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                smooth: true,
                // stack: '总量'
            }
        ]
    };
    setData(myChart, option)
    var index = 0
    $('.sales').on('click', '.caption a', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        for (var k in data[this.dataset.type]) {
            option.series[k].data = data[this.dataset.type][k]
        }
        index = $(this).index() - 1
        // option.series[0].data = data[this.dataset.type][0]
        // option.series[1].data = data[this.dataset.type][1]
        myChart.setOption(option)
    })

    var timer2 = setInterval(function () {
        index++
        index = index < 4 ? index : 0
        $('.caption a').eq(index).click()
    }, 2000)
    $('.sales').on({
        mouseenter: function () {
            clearInterval(timer2)
        },
        mouseleave: function () {
            timer2 = setInterval(function () {
                index++
                index = index < 4 ? index : 0
                $('.caption a').eq(index).click()
            }, 2000)
        }
    })
})();
// 销售渠道模块 雷达图
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置

    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            // 修改雷达图的大小
            radius: "65%",
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [
            {
                name: "北京",
                type: "radar",
                // 填充区域的线条颜色
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 10
                },
                // 修饰我们区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            }
        ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 销售模块 饼形图 半圆形 设置方式
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
        series: [
            {
                type: 'pie',
                // 放大图形
                radius: ['130%', '150%'],
                // 移动下位置  套住50%文字
                center: ['48%', '80%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                // 起始角度，支持范围[0, 360]
                startAngle: 180,
                hoverOffset: 0,
                data: [

                    {
                        value: 100,
                        itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d
                    { value: 200, itemStyle: { color: 'transparent' } }
                ]
            }
        ],
    }
    // 3. 把数据和配置给实例对象
    myChart.setOption(option);
})();
