//地图容器
var chart = echarts.init(document.getElementById('main'));
//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};
//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京","天津","上海","重庆","香港","澳门"];
var mapdata = [];
var dbarea = [], xbarea = [], xnarea = [], narea = [], darea = [], zarea = [];
var leaderP = [], subP = [], bossP = [];
//绘制全国地图
$.getJSON('static/map/china.json', function(data){
    d = [];
	for( var i=0;i<data.features.length;i++ ){
        var name = data.features[i].properties.name
        if( name == '辽宁' || name == '吉林' || name == '黑龙江' || name == '内蒙古' ) {
            d.push({
                name: name,
                value: 1
            });
        }else if( name == "新疆" || name == '青海' || name == '甘肃' || name == '宁夏' ){
            d.push({
                name: name,
                value: 2
            });
        }else if( name == "西藏" || name == '四川' || name == '云南' || name == '贵州' || name == '重庆' ){
            d.push({
                name: name,
                value: 3
            });
        }else if( name == "湖南" || name == '江西' || name == '福建' || name == '广东' || name == '广西' || name == '海南' || name == '台湾'){
            d.push({
                name: name,
                value: 4
            });
        }else if( name == "浙江" || name == '上海' || name == '江苏' || name == '安徽' || name == '山东' || name == '河北' || name == '天津' || name == '北京' ){
            d.push({
                name: name,
                value: 5
            });
        }else if( name == "陕西" || name == '山西' || name == '河南' || name == '湖北' ){
            d.push({
                name: name,
                value: 6
            });
        }
	}
    mapdata = d;
    for(var a in leaderPoint){ leaderP.push(leaderPoint[a]); };
    for(var a in subPoint){ subP.push(subPoint[a]); };
    for(var a in bossPoint){ bossP.push(bossPoint[a]); };
	//注册地图
	echarts.registerMap('china', data);
	//绘制地图
	renderMap('china', d, leaderP, subP, bossP, 22, 16);
});

//地图点击事件
var nowName = ''
chart.on('click', function (params) {
    params.event.stop();
    //console.log( params );
    if( params.seriesName == 'point' ){     // 是否点击了标记点
        // 数据添加
        addData(params); 
        // 特效变化
        windowMove(params);
    }else{
        $('#blockWindow').removeClass('outBlock')
        if( params.name in provinces ){
            //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
            $.getJSON('static/map/province/'+ provinces[params.name] +'.json', function(data){
                echarts.registerMap( params.name, data);
                var d = [], leaderPoint ,subPoint, bossPoint, headPoint;
                if( Point[params.name] ){
                    leaderPoint = Point[params.name].leaderData || [];
                    subPoint = Point[params.name].subData || [];
                    bossPoint = Point[params.name].bossData || [];
                }else{
                    leaderPoint = [];
                };
                console.log(bossPoint)
                for( var i=0;i<data.features.length;i++ ){
                    d.push({
                        name:data.features[i].properties.name
                    })
                };
                renderMap(params.name, d, leaderPoint, subPoint, bossPoint, 32, 25);
            });
        }else{
            renderMap('china', mapdata, leaderP, subP, bossP, 22, 16);
        }
    }
	
});

//初始化绘制全国地图配置
var option = {
	geo: {
        map: 'china',
        label: {
            normal:{
                show: true,
                textStyle:{
                    color:'#999',
                    fontSize:13
                }  
            },
            emphasis: {
                show: false,
                textStyle:{
                    color:'#fff',
                    fontSize:13
                }
            }
        }
    },
    backgroundColor: '#F5F5F5',  		// 图表背景色
    title : {   
        text: '【吉吉好车】店铺全国分布图',
        left: 'center',
        textStyle:{
            color: '#444',
            fontSize:16,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        },
        subtextStyle:{
        	color: '#444',
            fontSize:13,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    animationDuration: 400,
	animationEasing:'cubicOut',
	animationDurationUpdate: 400
}
var convertData = function(data) {
    var res = [];
    var fromCoord = ['120.206311', '30.219134'];
    var toCoord = data.value;
    if (fromCoord && toCoord) {
        res.push([{
            coord: fromCoord,
        }, {
            coord: toCoord,
        }]);
    }
    return res;
};
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
function renderMap(map, data, leaderPoint, subPoint, bossPoint, ledSize, subSize){
    option.title.subtext = map;
    option.visualMap = {
        type: 'piecewise',
        pieces: [
            {value: 1, label: '东北区', color: '#959595'},
            {value: 2, label: '西北区', color: '#A5A5A5'},
            {value: 3, label: '西南区', color: '#D5D5D5'},
            {value: 4, label: '南区', color: '#DFDFDF'},
            {value: 5, label: '东区', color: '#C5C5C5'},
            {value: 6, label: '中区', color: '#B5B5B5'},
            // {value: 7, label: '子店', color: '#bc317d'},
            // {value: 8, label: '中心店', color: '#bc3131'},
        ],
    }
    option.geo.map = map;
    option.geo.data = data;
    option.series = [
        {
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            label: {
	            normal:{
					show:true,
					textStyle:{
						color:'#444',
						fontSize:13
					}  
	            }
	        },
	        itemStyle: {
	            normal: {
	                areaColor: '#C5C5C5',
                    borderColor: '#fff'
	            },
	            emphasis: {
	                areaColor: '#e87a7a'
	            }
	        },
            data:mapdata
        },
        {
            name: 'point',
            type: 'custom',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: subSize,
            itemStyle: {
                normal: {
                    color: 'rgba(42,148,190,0.8)'
                },
                emphasis: {
                    borderColor: '#fff'
                }
            },
            renderItem: function (params, api) {//具体实现自定义图标的方法
                console.log()
                return {
                    type: 'image',
                    style: {
                        image: "static/img/flag.png",
                        width: subSize,
                        height: subSize,
                        x: api.coord([
                            subPoint[params.dataIndex].value[0], subPoint[params.dataIndex]
                                .value[1]
                        ])[0] - 5,
                        y: api.coord([
                            subPoint[params.dataIndex].value[0], subPoint[params.dataIndex]
                                .value[1]
                        ])[1] - 5
                    }
                }
            },
            data: subPoint
        },
        {
            name: 'point',
            type: 'custom',
            coordinateSystem: 'geo',
            symbolSize: ledSize,
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: 'rgba(206,64,61,1)'
                },
                emphasis: {
                    borderColor: '#fff'
                }
            },
            renderItem: function (params, api) {//具体实现自定义图标的方法
                console.log()
                return {
                    type: 'image',
                    style: {
                        image: "static/img/star2.png",
                        width: ledSize,
                        height: ledSize,
                        x: api.coord([
                            leaderPoint[params.dataIndex].value[0], leaderPoint[params.dataIndex]
                                .value[1]
                        ])[0] - 5,
                        y: api.coord([
                            leaderPoint[params.dataIndex].value[0], leaderPoint[params.dataIndex]
                                .value[1]
                        ])[1] - 5
                    }
                }
            },
            data: leaderPoint
        },
        {
            name: 'point',
            type: 'custom',
            coordinateSystem: 'geo',
            symbolSize: ledSize,
            zlevel: 4,
            itemStyle: {
                normal: {
                    color: 'rgba(206,64,61,1)'
                },
                emphasis: {
                    borderColor: '#fff'
                }
            },
            renderItem: function (params, api) {//具体实现自定义图标的方法
            	//console.log(bossPoint[params.dataIndex]);
            	if(bossPoint[params.dataIndex].name == '杭州中心店'){
            		return {
	                    type: 'image',
	                    style: {
	                        image: "static/img/star4.png",
	                        width: 45,
	                        height: 45,
	                        x: api.coord([
	                            bossPoint[params.dataIndex].value[0], bossPoint[params.dataIndex]
	                                .value[1]
	                        ])[0] - 23,
	                        y: api.coord([
	                            bossPoint[params.dataIndex].value[0], bossPoint[params.dataIndex]
	                                .value[1]
	                        ])[1] - 23
	                    }
	                }
            	}else{
            		return {
	                    type: 'image',
	                    style: {
	                        image: "static/img/star.png",
	                        width: 35,
	                        height: 35,
	                        x: api.coord([
	                            bossPoint[params.dataIndex].value[0], bossPoint[params.dataIndex]
	                                .value[1]
	                        ])[0] - 20,
	                        y: api.coord([
	                            bossPoint[params.dataIndex].value[0], bossPoint[params.dataIndex]
	                                .value[1]
	                        ])[1] - 20
	                    }
	                }
            	}
                
            },
            data: bossPoint
        }
    ];
    if(bossPoint){
    	for( var i=0; i<bossPoint.length; i++) {
    		var fast = Math.ceil(Math.random()*2 + 2);
    		console.log(fast);
	        option.series.push(
//	        	{
//		            name: 'line',
//		            type: 'lines',
//		            zlevel: 4,
//		            //线特效配置
//		            effect: {
//		                show: true,
//		                period: 6,
//		                trailLength: 0.1,
//		                symbol: planePath, //标记类型
//		                symbolSize: 10
//		            },
//		            lineStyle: {
//		                normal: {
//		                    width: 1,
//		                    opacity: 0.4,
//		                    curveness: -0.2, //弧线角度
//		                    color: '#0f80ea'
//		                }
//		            },
//		            data: convertData(bossPoint[i])
//		        },
				{
			        name: 'name',
			        type: 'lines',
			        zlevel: 1,
			        effect: {
			            show: true,
			            period: fast,
			            trailLength: 0.7,
			            color: 'red',
			            symbolSize: 3
			        },
			        lineStyle: {
			            normal: {
			                color: '#fff',
			                width: 0,
			                curveness: 0.3
			            }
			        },
			        data: convertData(bossPoint[i])
			    },
				{
		            type: "lines",
		            zlevel: 2,
		            effect: {
		                show: true,
		                period: fast, //箭头指向速度，值越小速度越快
		                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
		                symbol: "arrow", //箭头图标
		                symbolSize: 8, //图标大小
		                color: 'red'
		            },
		            lineStyle: {
		                normal: {
		                    width: 1, //尾迹线条宽度
		                    opacity: 0, //尾迹线条透明度
		                    curveness: 0.3 //尾迹线条曲直度
		                }
		            },
		            data: convertData(bossPoint[i])
		       }
	        )
	    };
    }
    
    //渲染地图
    chart.setOption(option);
}

// 特效变化函数
function windowMove (params) {
    var seriesModel = chart.getModel().getSeriesByIndex(params.seriesIndex)
    // 获取地理坐标系实例
    var coordSys = seriesModel.coordinateSystem;
    // dataToPoint 相当于 getPosByGeo
    var point = coordSys.dataToPoint( [params.value[0], params.value[1]] );
    var top = (point[1] - 230 < 0) ? point[1] + 20 : point[1] - 200,
            left = (point[0] - 180 < 0) ? point[0]: point[0] - 180;
        if( point[1] - 230 < 0 ) {
            $('#blockWindow').css({"transformOrigin": "50% 0%"})
        }else {
            $('#blockWindow').css({"transformOrigin": "50% 100%"})
        }
        if ( !nowName ) {
            $('#blockWindow').css({"top": top, "left": left})
        } else {
            $('#blockWindow').css({"top": top, "left": left, "transition": "all .6s"})
        }
        
        if( nowName == params.name ) {
            $('#blockWindow')[0].className?$('#blockWindow').removeClass('outBlock'):$('#blockWindow').addClass('outBlock');
        }else{
            nowName = params.name   
            $('#blockWindow').removeClass('outBlock').stop().addClass('outBlock');
        }
}
// 数据添加
function addData (params) {
    var data = params.data,
        imgSrc = 'static/img/ShopImg/';
    $('#blockWindow .title').html(data.name);
    if(data.imgName){
        $('#blockWindow .sm_img')[0].src = imgSrc + data.imgName + '1.jpg';
    }else{
        $('#blockWindow .sm_img')[0].src = ''
        console.log('暂无图片')
    };
    if(data.phone){
        $('#blockWindow .big_phone').html('联系电话：' + data.phone);
    }else{
        $('#blockWindow .big_phone').html('');
    }
    if(data.address){
        $('#blockWindow .address').html(data.address);
    }else{
        $('#blockWindow .address').html('暂无');
    }
    // 创建轮播
    $('.imgShow .swiper-wrapper')[0].innerHTML = '	';
    if(data.imgNum != 0){
        for( var i=0; i<data.imgNum; i++ ){
            var div = document.createElement('div');
            div.className = 'swiper-slide';
            var img = document.createElement('img');
            img.src = imgSrc + data.imgName + (i+1) +'.jpg';
            div.appendChild(img);
            $('.imgShow .swiper-wrapper')[0].appendChild(div);
        }
        bannerCreate()
    }
}