<template>
  <div class="main-div">
    <div class="main-child" style="justify-content: space-evenly">
      <div class="main-div-child" @click="openNewWin1">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">打开name1</span>
      </div>
      <div class="main-div-child" @click="openNewWin2">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">打开name2</span>
      </div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSingleWin">
        <i class="iconfont icon-tongxin icons"></i>
        <span style="font-size: 12px">发送数据</span>
      </div>
      <div class="right-text">发送数据到所有窗口</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSingleWinReload">
        <i class="iconfont icon-tongxin icons"></i>
        <span style="font-size: 12px">单独发送</span>
      </div>
      <div class="right-text">发送数据到name1窗口</div>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      async openNewWin1 () {
        this.$store.dispatch('changeTransition', 'none')
        let res = await this.$Win.openWin({
          width: 300,
          height: 400,
          router: '/ipcWindow',
          name: 'name1'
        })
        console.log(res)
      },
      async openNewWin2 () {
        this.$store.dispatch('changeTransition', 'none')
        let res = await this.$Win.openWin({
          width: 300,
          height: 400,
          router: '/ipcWindow',
          name: 'name2'
        })
        console.log(res)
      },
      openSingleWin () {
        this.$Win.sendMsg('electron-ui, msg....')
      },
      openSingleWinReload () {
        this.$Win.sendMsg('electron-ui, msg....', ['name1'])
      }
    }
  }
</script>
<style scoped>
.main-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.icons {
  font-size: 50px;
}
.main-div-child{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  width: 80px;
  padding: 10px;
  flex-shrink: 0;
  color: #118475
}
.main-child{
  display: flex;
  background: rgba(212, 212, 212, 0.3);;
  margin-bottom: 1px;
  flex-shrink: 0;
}
.main-child .right-text{
  display: flex;
  align-items: center;
  font-size: 14px;
}
</style>
