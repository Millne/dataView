// 中心店铺
//var headPoint = [{name: '杭州',value: ['120.206311', '30.219134']}]
var bossPoint = {
    'gansu':{name: '甘肃中心店',value: ['103.870419', '36.1056'],
    	imgName: 'gansu_0', imgNum: 2,
        address: '陕西省西安市灞桥区世博大道世园大公馆(西安世园会附近)', 
        phone: ''},
    'sichuan':{name: '四川中心店',value: ['104.080937', '30.658597'],
    	imgName: 'sichuan_0', imgNum: 2,
        address: '四川省成都市双流区机场路近都段393号', 
        phone: ''},
    'hunan':{name: '湖南中心店',value: ['112.944761', '28.361141'],
    	imgName: 'hunan_0', imgNum: 2,
        address: '湖南省长沙市岳麓区麓山南路252号', 
        phone: ''},
    'hangzhou':{name: '杭州总部',value: ['120.206311', '30.219134'],
    	imgName: 'hangzhou_0', imgNum: 2,
        address: '浙江省杭州市滨江区滨安路1190号', 
        phone: '18039976767'},
    'henan':{name: '河南中心店',value: ['113.584606', '34.78215'],
    	imgName: 'henan_0', imgNum: 2,
        address: '河南省郑州市金水区中州大道广电南路交叉口万龙花园7号楼商铺（平原停车场院内）', 
        phone: '18039976767'},
    'jilin':{name: '吉林中心店',value: ['125.302893', '43.949166'],
    	imgName: 'jilin_0', imgNum: 2,
        address: '吉林省长春市绿园区腾飞路与西湖大路交会处）', 
        phone: ''}
}
var leaderPoint = {
    'zhengzhou':{name: '浙江吉吉汽车销售有限公司郑州分公司',value: ['113.70787', '34.812366', '8'],        // 0
        imgName: 'zhengzhou_0', imgNum: 2,
        address: '河南省郑州市金水区中州大道广电南路交叉口万龙花园7号楼商铺（平原停车场院内）', 
        phone: '18039976767'},
    'heze':{name: '山东吉吉汽车销售有限公司',value: ['116.057287', '35.39385','8'],       // 1
        imgName: 'heze_0', imgNum: 3,
        address: '山东省菏泽市巨野县佳农国际19楼', 
        phone: '18053070088'},
    'pucheng':{name: '浙江吉吉好车汽车销售有限公司蒲城分公司',value: ['109.621527', '34.959686','8'],     // 2
        imgName: 'pucheng_0', imgNum: 3,
        address: '陕西省渭南市蒲城县东城西部车城吉吉汽车新零售', 
        phone: '13571531777'},
    'luoyang':{name: '浙江吉吉汽车销售有限公司洛阳分公司',value: ['112.512079', '34.685631','8'],     // 3
        imgName: 'luoyang_0', imgNum: 2,
        address: '洛阳市瀍河区九都东路和启明南路交叉口西南角2号展厅', 
        phone: '18937912803'},
    'fengxian':{name: '丰县店（徐州地区）',value: ['116.6019025553', '34.6997221211','8'],       // 4    丰县（徐州地区）
        imgName: 'fengxian_0', imgNum: 2,
        address: '江苏省徐州市丰县305县道福来顺大酒店附近', 
        phone: ''},
    'pingyin':{name: '平阴店（济南地区）',value: ['116.4626199171', '36.2950468177','8'],     // 5  平阴店（济南地区）
        imgName: 'pingyin_0', imgNum: 2,
        address: '平阴县东河镇谷城路118号', 
        phone: ''},
    'huzhou':{name: '湖州店',value: ['120.0945421259', '30.8991516650','8'],     // 6
        imgName: 'huzhou_0', imgNum: 2,
        address: '湖州市成业路口107号', 
        phone: ''},
    'nanyang':{name: '南阳店',value: ['112.5350204603', '32.9966581463','8'],     //  7
        imgName: 'nanyang_0', imgNum: 2,
        address: '南阳市工业北路张衡中路302号', 
        phone: ''},
    'jinhua':{name: '金华店',value: ['119.6540443421', '29.0843844893','8'],     // 8
        imgName: 'jinhua_0', imgNum: 2,
        address: '金华市丹溪东路康济南街24号', 
        phone: ''},
    'shaox':{name: '绍兴店',value: ['120.5804845811', '30.0093776064','8'],     // 9
        imgName: 'shaox_0', imgNum: 2,
        address: '浙江省绍兴市越城区中兴中路309号', 
        phone: ''},
    'bengbu':{name: '蚌埠店',value: ['117.3663926881', '32.9259941579','8'],     // 10
        imgName: 'bengbu_0', imgNum: 2,
        address: '蚌埠市蚌山区涂山东路22号', 
        phone: ''}
}
// 子门店
var subPoint = {
    'zhongmu':{name: '中牟店',value: ['113.9827265660', '34.7251435400','7'],       //  0
        imgName: 'zhongmu_0', imgNum: 2,
        address: '河南省郑州市中牟县城东路小学(城东南路东)', 
        phone: ''},
    'xinzheng':{name: '新郑店',value: ['113.7469856744', '34.4016712112','7'],       //  1
        imgName: 'xinzheng_0', imgNum: 2,
        address: '新港八路与航兴路交叉口航空港蓝宝石显示器件产业园内', 
        phone: ''},
    'xinmi':{name: '新密店',value: ['113.3973111464', '34.5457158344','7'],       //  2
        imgName: 'xinmi_0', imgNum: 2,
        address: '新密市东大街天都商场1层', 
        phone: ''},
    'dengfeng':{name: '登封店',value: ['113.0569146094', '34.4600018391','7'],       //  3
        imgName: 'dengfeng_0', imgNum: 2,
        address: '河南省郑州市登封市S323(旧)阳城工业区', 
        phone: ''},
    'gongyi':{name: '巩义店',value: ['113.0289564554', '34.7539456086','7'],       //  4
        imgName: 'gongyi_0', imgNum: 2,
        address: '河南省郑州市巩义市建设路明阳花园西门', 
        phone: ''},
    'xingyang':{name: '荥阳店',value: ['113.71847548971', '34.7131496244','7'],      //  5
        imgName: 'xingyang_0', imgNum: 2,
        address: '塔山路与310国道交叉口西100米', 
        phone: ''},

    'liulin':{name: '柳林店',value: ['115.8593564984', '35.1842285131','7'],       //  6
        imgName: 'liulin_0', imgNum: 2,
        address: '荥阳市近郊新田大道', 
        phone: ''},
    'juyehw':{name: '巨野恒旺店',value: ['116.0944306274', '35.3847090979','7'],     //  7
        imgName: 'juyehw_0', imgNum: 2,
        address: '菏泽市巨野县巨金线', 
        phone: ''},
    'longgu':{name: '龙固店',value: ['119.6540443421', '29.0843844893','7'],       //  8
        imgName: 'longgu_0', imgNum: 2,
        address: '山东省菏泽市巨野县龙固镇兴龙街文强物流东北100米', 
        phone: ''},
    'dushan':{name: '独山店',value: ['120.5804845811', '30.0093776064','7'],       //  9
        imgName: 'dushan_0', imgNum: 2,
        address: '山东省菏泽市巨野县大义镇丁海村', 
        phone: ''},
    'caoxian':{name: '曹 县店',value: ['116.1905930420', '35.2827154020','7'],      //  10
        imgName: 'caoxian_0', imgNum: 2,
        address: '山东省菏泽市曹县郑庄街道郑庄镇政府东北150米', 
        phone: ''},
    'danxian':{name: '单 县店',value: ['116.1051724718', '35.3953271757','7'],      //  11
        imgName: 'danxian_0', imgNum: 2,
        address: '256省道西50米', 
        phone: ''},
    'yuncheng':{name: '郓城店',value: ['116.0398591196', '35.4671037858','7'],     //  12
        imgName: 'yuncheng_0', imgNum: 2,
        address: '平安路与育英街交叉口南100米', 
        phone: ''},
    'chengwu':{name: '成武店',value: ['115.9160353164', '34.9541983485','7'],     //  13
        imgName: 'chengwu_0', imgNum: 2,
        address: '山东省菏泽市成武县伯乐大街1096号', 
        phone: ''},
    'juancheng':{name: '鄄城店',value: ['115.8337388550', '35.4185281446','7'],     //  14
        imgName: 'juancheng_0', imgNum: 2,
        address: '山东省菏泽市鄄城县孙膑路肖宁街超市北100米', 
        phone: ''},
    'dongming':{name: '东明店',value: ['115.1025755516', '35.3015574076','7'],     //  15
        imgName: 'dongming_0', imgNum: 2,
        address: '新乡市红旗区新中大道681号', 
        phone: ''},

    'chengcheng':{name: '澄城店',value: ['109.929238', '35.198462','7'],     //  16
        imgName: 'chengcheng_0', imgNum: 2,
        address: '城郊乡串业村202省道西南方向丰圆大酒店以西方向', 
        phone: ''},
    'baishui':{name: '白水店',value: ['109.8377358180', '35.1175329059','7'],     //  17
        imgName: 'baishui_0', imgNum: 2,
        address: '人民路与粮北巷交叉口西50米(中段)', 
        phone: ''},
    'heyang':{name: '合阳店',value: ['110.1612370803', '35.2377714976','7'],     //  18
        imgName: 'heyang_0', imgNum: 2,
        address: '渭南市合阳县城关街道解放路东义巷2号', 
        phone: ''},
    'heyang1':{name: '合阳店',value: ['110.1612370803', '35.2377714976','7'],     //  19
        imgName: 'heyang1_0', imgNum: 2,
        address: '合东路与知杨路交叉口北50米', 
        phone: ''},
    'hancheng':{name: '韩城店',value: ['110.5622722444', '35.6160594641','7'],     //  20
        imgName: 'hancheng_0', imgNum: 2,
        address: '陕西省渭南市韩城市金城大街与隍庙巷交叉口西100米', 
        phone: ''},
    'huayin':{name: '华阴店',value: ['110.0986510338', '34.5717843154','7'],     //  21
        imgName: 'huayin_0', imgNum: 2,
        address: '渭南市华阴市太华南路45号', 
        phone: ''},
    'fuping':{name: '富平店',value: ['109.1867114532', '34.7572256212','7'],     //  22
        imgName: 'fuping_0', imgNum: 2,
        address: '渭南市富平县人民路南段家东屏商场正对面194号3层', 
        phone: ''},

    'mengjin':{name: '孟津店',value: ['112.4515250748', '34.8317721069','7'],     //  23
        imgName: 'mengjin_0', imgNum: 2,
        address: '河南省洛阳市孟津县会盟大道与八一路交叉口东100米', 
        phone: ''},
    'xinan':{name: '新安店',value: ['112.1390119495', '34.7339342575','7'],     //  24
        imgName: 'xinan_0', imgNum: 2,
        address: '勾践路与裕丰路交叉口西150米', 
        phone: ''},
    'yiyang':{name: '宜阳店',value: ['112.1856584743', '34.5210681152','7'],     //  25
        imgName: 'yiyang_0', imgNum: 2,
        address: '河南省洛阳市宜阳县莲庄镇马回村马回小学向北200米', 
        phone: ''},
    'yichuan_':{name: '伊川店',value: ['112.4320992892', '34.4276139362','7'],     //  26
        imgName: 'yichuan_0', imgNum: 2,
        address: '河南省洛阳市伊川县人民西路387', 
        phone: ''},
    'luoning':{name: '洛宁店',value: ['111.6596918411', '34.3949167652','7'],     //  27
        imgName: 'luoning_0', imgNum: 2,
        address: '河南省洛阳市洛宁县审计局家属院北70米(京宁路西)', 
        phone: ''},
    'songxian':{name: '嵩县店',value: ['112.0921223690', '34.1408419495','7'],       //  28
        imgName: 'songxian_0', imgNum: 2,
        address: '河南省洛阳市嵩县建设路117-副8号', 
        phone: ''},
    'ruyang':{name: '汝阳店',value: ['112.4796479830', '34.1599534483','7'],     //  29
        imgName: 'ruyang_0', imgNum: 2,
        address: '书院街与文化路交叉口西北200米', 
        phone: ''},
    'luanchuan':{name: '栾川店',value: ['112.6222117823', '34.7919859804','7'],     //  30
        imgName: 'luanchuan_0', imgNum: 2,
        address: '河南省洛阳市栾川县君山路汽车站对面(梨园巷内50米)', 
        phone: ''},

    'peishi':{name: '沛店',value: ['116.9441190081', '34.7273283225','7'],       //  31
        imgName: 'peishi_0', imgNum: 2,
        address: '浙江省杭州市建德市乾潭镇沛市村村民委员会(下舍线南)', 
        phone: ''},
    'suining':{name: '睢宁店',value: ['117.9475452637', '33.9188417501','7'],     //  32
        imgName: 'suining_0', imgNum: 2,
        address: '江苏省徐州市丰县北环路江苏徐州盐化工产业园东南150米', 
        phone: ''},
    'pizhou':{name: '邳州店',value: ['118.0190560519', '34.3409527340','7'],     //  33
        imgName: 'pizhou_0', imgNum: 2,
        address: '江苏省徐州市邳州市解放西路东方医院东南门附近', 
        phone: ''},
    'xinyi':{name: '新沂店',value: ['119.3620254169', '34.3751753528','7'],     //  34
        imgName: 'xinyi_0', imgNum: 2,
        address: '江苏省徐州市新沂市段家巷1号', 
        phone: ''},

    'shanghe':{name: '商河店',value: ['117.1636339832', '37.3149644988','7'],     //  35
        imgName: 'shanghe_0', imgNum: 2,
        address: '章丘路与铁山路交叉口东北50米', 
        phone: ''},

    'deqing':{name: '德清店',value: ['119.9839819172', '30.5489469334','7'],     //  36
        imgName: 'deqing_0', imgNum: 2,
        address: '浙江省湖州市德清县乾元镇中心小学西北800米', 
        phone: ''},
    'changxing':{name: '长兴店',value: ['119.9166276675', '31.0325478408','7'],     //  37
        imgName: 'changxing_0', imgNum: 2,
        address: '高铁路669号综合楼3楼', 
        phone: ''},
    'anji':{name: '安吉店',value: ['119.6887764145', '30.6439991351','7'],     //  38
        imgName: 'anji_0', imgNum: 2,
        address: '浙江省湖州市安吉县浦源大道448号', 
        phone: ''},

    'xixia':{name: '西峡店',value: ['111.4788677583', '33.3118596566','7'],     //  39
        imgName: 'xixia_0', imgNum: 2,
        address: '莲花南路与仲景大道西段交汇处向北56米处', 
        phone: ''},
    'inye':{name: '新野店',value: ['112.3665925781', '32.5268315483','7'],     //  40
        imgName: 'xinye_0', imgNum: 2,
        address: '河南省南阳市新野县汉城路南(新野县民政局附近)', 
        phone: ''},
    'tanghe':{name: '唐河店',value: ['112.8138789659', '32.6875050134','7'],     //  41
        imgName: 'tanghe_0', imgNum: 2,
        address: '五贤路与汉阳大道交叉口东北200米', 
        phone: ''},
    'xichuan':{name: '淅川店',value: ['111.4972064092', '33.1444807970','7'],     //  42
        imgName: 'xichuan_0', imgNum: 2,
        address: '河南省南阳市淅川县丹江大道414号', 
        phone: ''},
    'zhenping':{name: '镇平店',value: ['112.2409787599', '33.0399899358','7'],     //  43
        imgName: 'zhenping_0', imgNum: 2,
        address: '河南省南阳市镇平县校场路260号', 
        phone: ''},
    'neixiang':{name: '内乡店',value: ['111.8556822687', '33.0511574544','7'],     //  44
        imgName: 'neixiang_0', imgNum: 2,
        address: '南阳市内乡县菊潭大街北166号附近', 
        phone: ''},
    'nanzhao':{name: '南召店',value: ['112.4355770232', '33.4960521780','7'],     //  45
        imgName: 'nanzhao_0', imgNum: 2,
        address: '河南省南阳市南召县丹霞路368号', 
        phone: ''},
    'fangcheng':{name: '方城店',value: ['113.0190815826', '33.2603300945','7'],     //  46
        imgName: 'fangcheng_0', imgNum: 2,
        address: '南阳市方城县清河乡清政路22号', 
        phone: ''},
    'sheqi':{name: '社旗店',value: ['112.9544105426', '33.0622164075','7'],     //  47
        imgName: 'sheqi_0', imgNum: 2,
        address: '河南省南阳市社旗县建设路华欣家园A区附近', 
        phone: ''},
    'tongbo':{name: '桐柏店',value: ['113.4353909459', '32.3852010914','7'],     //  48
        imgName: 'tongbo_0', imgNum: 2,
        address: '河南省南阳市桐柏县盘古小区(准渎路东100米)',    
        phone: ''},

    'panan':{name: '磐安店',value: ['120.4567093243', '29.0601197698','7'],     //  49
        imgName: 'panan_0', imgNum: 2,
        address: '浙江省金华市磐安县安文中街77-1号-南20米', 
        phone: ''},
    'wuyi':{name: '武义店',value: ['119.8230771836', '28.8982518338','7'],     //  50
        imgName: 'wuyi_0', imgNum: 2,
        address: '金华市武义县解放中路72-76号', 
        phone: ''},
    'pujiang':{name: '浦江店',value: ['119.8985069219', '29.4587760566','7'],     //  51
        imgName: 'pujiang_0', imgNum: 2,
        address: '浙江省金华市浦江县中山南路69号', 
        phone: ''},
    'yongkang':{name: '永康店',value: ['120.0538752138', '28.8941640138','7'],     //  52
        imgName: 'yongkang_0', imgNum: 2,
        address: '永康金华永康市东城街道高圳路60号', 
        phone: ''},
    'dongyang':{name: '东阳店',value: ['120.2483297529', '29.2958146118','7'],     //  53
        imgName: 'dongyang_0', imgNum: 2,
        address: '浙江省金华市东阳市吴宁街道泗雅线东阳站', 
        phone: ''},
    'yiwu':{name: '义乌店',value: ['120.0812694410', '29.3113360154','7'],     //  54
        imgName: 'yiwu_0', imgNum: 2,
        address: '浙江省金华市义乌市后宅高速路口煤山', 
        phone: ''},
    'yiwu1':{name: '义乌店',value: ['120.0812694410', '29.3113360154','7'],     //  55
        imgName: 'yiwu1_0', imgNum: 2,
        address: '金华市义乌市后宅街道宗泽北路1158号', 
        phone: ''},
    'jindong':{name: '金东店',value: ['119.6996966547', '29.1047982210','7'],     //  56
        imgName: 'jindong_0', imgNum: 2,
        address: '金华市金东区东宁路315号', 
        phone: ''},

    'zhuji':{name: '诸暨店',value: ['120.2427156820', '29.7199843750','7'],     //  57
        imgName: 'zhuji_0', imgNum: 2,
        address: '浙江省绍兴市诸暨市东昌路与永昌路交叉口西南50米', 
        phone: ''},
    'shengzhou':{name: '嵊州店',value: ['120.8281362130', '29.5947396192','7'],     //  58
        imgName: 'shengzhou_0', imgNum: 2,
        address: '浙江省嵊州市剡湖街道官河路619号', 
        phone: ''},
    'xinchang':{name: '新昌店',value: ['120.9104164492', '29.5054726135','7'],     //  59
        imgName: 'xinchang_0', imgNum: 2,
        address: '绍兴市新昌县鼓山中路159号', 
        phone: ''},

    'guzhen':{name: '固镇店',value: ['117.3232138741', '33.3234509002','7'],     //  60
        imgName: 'guzhen_0', imgNum: 2,
        address: '安徽省蚌埠市固镇县谷阳路157号', 
        phone: ''},
    'huaiyuan':{name: '怀远店',value: ['117.2116462119', '32.9760308567','7'],     //  61
        imgName: 'huaiyuan_0', imgNum: 2,
        address: '蚌埠市怀远县禹王路1177号', 
        phone: ''},
    'wuhe':{name: '五河店',value: ['117.8918731248', '33.1508164431','7'],     //  62
        imgName: 'wuhe_0', imgNum: 2,
        address: '306省道与S07徐明高速入口交叉口东南150米', 
        phone: ''},
    'heze1':{name: '山东吉吉汽车销售有限公司旗舰店',value: ['115.930531', '35.288166','7'],     //  63
        imgName: 'heze1_0', imgNum: 2,
        address: '山东省菏泽市巨野县327国道新花冠酒厂888米路北', 
        phone: '18053070088'},
    'heze2':{name: '单县万鑫店',value: ['116.076476', '34.825876','7'],     //  64
        imgName: 'heze2_0', imgNum: 2,
        address: '山东省菏泽市单县北外环振华国际汽车城（交警大队车管所东）', 
        phone: '13205309981'},
    'heze3':{name: '菏泽八方店',value: ['115.548081', '35.266182','7'],     //  65
        imgName: 'heze3_0', imgNum: 2,
        address: '菏泽市公安局高速公路交通警察支队旁', 
        phone: '18005308150'},
    'heze4':{name: '鄄城店',value: ['115.527041', '35.567337','7'],     //  66
        imgName: 'heze4_0', imgNum: 2,
        address: '菏泽市公安局交警支队鄄城大队车管所旁', 
        phone: '15764087888'},
    'heze5':{name: '巨野城区1店',value: ['116.085039', '35.385605','7'],     //  67
        imgName: 'heze5_0', imgNum: 2,
        address: '老八件（光明路店）旁', 
        phone: '17753061888'},
    'heze6':{name: '巨野城区2店',value: ['116.099068', '35.370092','7'],     //  68
        imgName: 'heze6_0', imgNum: 2,
        address: '菏泽市巨野县五里墩村', 
        phone: '13563879179'},
    'heze7':{name: '巨野独山店',value: ['116.186435', '35.283883','7'],     //  69
        imgName: 'heze7_0', imgNum: 2,
        address: '巨野县独山镇政府（独山镇委青龙线北）', 
        phone: '18816025500'},
    'jining':{name: '狼山店',value: ['116.354057', '35.307971','7'],     //  70
        imgName: 'jining_0', imgNum: 2,
        address: '狼山（济宁市嘉祥县中山镇狼山）', 
        phone: '15763773777'}
}
var Point = {
    "河南": {
        leaderData: [
            leaderPoint['zhengzhou'],
            leaderPoint['luoyang'],
            leaderPoint['nanyang'],
        ],
        subData: [
            subPoint['zhongmu'],
            subPoint['xinzheng'],
            subPoint['xinmi'],
            subPoint['dengfeng'],
            subPoint['gongyi'],
            subPoint['xingyang'],
            subPoint['mengjin'],
            subPoint['xinan'],
            subPoint['yiyang'],
            subPoint['yichuan_'],
            subPoint['luoning'],
            subPoint['songxian'],
            subPoint['ruyang'],
            subPoint['luanchuan'],
            subPoint['xixia'],
            subPoint['inye'],
            subPoint['tanghe'],
            subPoint['xichuan'],
            subPoint['zhenping'],
            subPoint['neixiang'],
            subPoint['nanzhao'],
            subPoint['fangcheng'],
            subPoint['sheqi'],
            subPoint['tongbo'],
        ],
        bossData: [
            bossPoint['henan']
        ]
    },
    "山东": {
        leaderData: [
            leaderPoint['heze'],
            leaderPoint['pingyin'],
        ],
        subData: [
            subPoint['liulin'],
            subPoint['juyehw'],
            subPoint['longgu'],
            subPoint['dushan'],
            subPoint['caoxian'],
            subPoint['danxian'],
            subPoint['yuncheng'],
            subPoint['chengwu'],
            subPoint['juancheng'],
            subPoint['dongming'],
            subPoint['shanghe'],
            subPoint['heze1'],
            subPoint['heze2'],
            subPoint['heze3'],
            subPoint['heze4'],
            subPoint['heze5'],
            subPoint['heze6'],
            subPoint['heze7'],
            subPoint['jining'],
        ]
    },
    "陕西": {
        leaderData: [
            leaderPoint['pucheng'],
        ],
        subData: [
            subPoint['chengcheng'],
            subPoint['baishui'],
            subPoint['heyang'],
            subPoint['heyang1'],
            subPoint['hancheng'],
            subPoint['huayin'],
            subPoint['fuping'],
        ]
    },
    "江苏": {
        leaderData: [
            leaderPoint['fengxian'],
        ],
        subData: [
            subPoint['peishi'],
            subPoint['suining'],
            subPoint['pizhou'],
            subPoint['xinyi'],
        ]
    },
    "浙江": {
        leaderData: [
            leaderPoint['huzhou'],
            leaderPoint['jinhua'],
            leaderPoint['shaox'],
        ],
        subData: [
            subPoint['deqing'],
            subPoint['changxing'],
            subPoint['anji'],
            subPoint['panan'],
            subPoint['wuyi'],
            subPoint['pujiang'],
            subPoint['yongkang'],
            subPoint['dongyang'],
            subPoint['yiwu'],
            subPoint['yiwu1'],
            subPoint['jindong'],
            subPoint['zhuji'],
            subPoint['shengzhou'],
            subPoint['xinchang'],
        ],
        bossData: [
            bossPoint['hangzhou']
        ]
    },
    "安徽": {
        leaderData: [
            leaderPoint['bengbu']
        ],
        subData: [
            subPoint['guzhen'],
            subPoint['huaiyuan'],
            subPoint['wuhe'],
        ]
    },
    "甘肃": {
        leaderData: [],
        subData: [],
        bossData: [
            bossPoint['gansu']
        ]
    },
    "四川": {
        leaderData: [],
        subData: [],
        bossData: [
            bossPoint['sichuan']
        ]
    },
    "湖南": {
        leaderData: [],
        subData: [],
        bossData: [
            bossPoint['hunan']
        ]
    },
    "吉林": {
        leaderData: [],
        subData: [],
        bossData: [
            bossPoint['jilin']
        ]
    }
}
