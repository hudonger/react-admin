export const getHomeInfo = options => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      cardData: [
        { id: 10001,title: '总销售额', count: 126560, color: '#2d8cf0', up: true },
        { id: 10002,title: '支付笔数', count: 6560, color: '#9a66e4', up: true },
        { id: 10003,title: '访问量', count: 8080, color: '#19be6b', up: true },
        { id: 10004,title: '新增用户', count: 602, color: '#e46cbb', up: false }
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  }
}
