// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IP: 'http://192.168.43.201:3333/',
    IPRes: 'http://192.168.43.201:3001/',
    songs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: this.data.IP + 'songList/find', //仅为示例，并非真实的接口地址
      data: {
        _id: options.id,
        submitType: "findJoin",
        ref: ['song', '']
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          songs: res.data
        })
      }
    })
  },
  clickSinger: (event) => {
    let _id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../songplay/songplay?' + 'id=' + _id
    })
  },







  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})