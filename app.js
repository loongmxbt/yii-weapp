//app.js
const AV = require('./libs/av-weapp-min.js');

AV.init({
  appId: '',
  appKey: '',
});

App({
  systemInfo: null,
  onLaunch() {
    const self = this;
    wx.getSystemInfo({
      success(res) {
        self.systemInfo = res;
      },
    });
  },
  // getUserInfo:function(cb){
  //   var that = this
  //   if(this.globalData.userInfo){
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   }else{
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  // globalData:{
  //   userInfo:null
  // }
})
