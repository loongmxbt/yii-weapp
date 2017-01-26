const App = getApp();

Page({
  data: {
    sections: [
      {
        title: "「正装租赁」",
        items: [
          {name: "男士职业正装", cover: "http://placehold.it/200x200"},
          {name: "女士职业正装", cover: "http://placehold.it/200x200"},
          {name: "男士休闲正装", cover: "http://placehold.it/200x200"},
          {name: "女士休闲正装", cover: "http://placehold.it/200x200"}
        ]
      },
      {
        title: "「舞美租赁」",
        items: [
          {name: "男士职业正装", cover: "http://placehold.it/200x200"},
          {name: "女士职业正装", cover: "http://placehold.it/200x200"},
          {name: "男士休闲正装", cover: "http://placehold.it/200x200"},
          {name: "女士休闲正装", cover: "http://placehold.it/200x200"}
        ]
      },
      {
        title: "「个性定制」",
        items: [
          {name: "男士职业正装", cover: "http://placehold.it/200x200"},
          {name: "女士职业正装", cover: "http://placehold.it/200x200"},
          {name: "男士休闲正装", cover: "http://placehold.it/200x200"},
          {name: "女士休闲正装", cover: "http://placehold.it/200x200"}
        ]
      },
    ],
    windowWidth: App.systemInfo.windowWidth,
  },

  viewItem(e) {
    const data = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../order/order?type=${data.type}&id=${data.id}&name=${data.name}`,
    });
  },



  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
