<template>
  <div class="main-div">
    <div class="main-child">
      <div class="main-div-child" @click="openNewWin">
        <i class="iconfont icon-donghuaguanli icons"></i>
        <span style="font-size: 12px">左右旋转</span>
      </div>
      <div class="right-text">同一个窗口下两个不同的页面，应用在最顶层的路由上</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSingleWin">
        <i class="iconfont icon-donghuaguanli icons"></i>
        <span style="font-size: 12px">上下旋转</span>
      </div>
      <div class="right-text">同一个窗口下两个不同的页面，应用在最顶层的路由上</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSingleWinReload">
        <i class="iconfont icon-donghuaguanli icons"></i>
        <span style="font-size: 12px">左滑</span>
      </div>
      <div class="right-text">同一个窗口（新弹窗尽量设置active-out的时间为零，这样窗口显示效果为立即加载）</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSlip">
        <i class="iconfont icon-donghuaguanli icons"></i>
        <span style="font-size: 12px">右滑</span>
      </div>
      <div class="right-text">同一个窗口（新弹窗尽量设置active-out的时间为零，这样窗口显示效果为立即加载）</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openRight">
        <i class="iconfont icon-donghuaguanli icons"></i>
        <span style="font-size: 12px">上滑</span>
      </div>
      <div class="right-text">同一个窗口（新弹窗尽量设置active-out的时间为零，这样窗口显示效果为立即加载）</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="pinglun">
        <i class="iconfont icon-donghuaguanli icons"></i>
        <span style="font-size: 12px">下滑</span>
      </div>
      <div class="right-text">同一个窗口（新弹窗尽量设置active-out的时间为零，这样窗口显示效果为立即加载）</div>
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
      async openNewWin () {
        this.$store.dispatch('changeTransition', 'flip')
        this.$router.replace('/login')
      },
      async openSingleWin () {
        this.$store.dispatch('changeTransition', 'flipx')
        this.$router.replace('/login')
      },
      async openSingleWinReload () {
        this.$store.dispatch('changeTransition', 'slipLeft')
        this.$router.replace('/login')
      },
      async openSlip () {
        this.$store.dispatch('changeTransition', 'slipRight')
        this.$router.replace('/login')
      },
      async openRight () {
        this.$store.dispatch('changeTransition', 'slipUp')
        this.$router.replace('/login')
      },
      pinglun () {
        this.$store.dispatch('changeTransition', 'slipDown')
        this.$router.replace('/login')
      }
    },
    mounted: function () {
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
