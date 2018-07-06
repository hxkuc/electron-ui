<template>
  <div class="main-div">
    <div class="main-div-child" @click="goWindows">
      <i class="iconfont icon-jiaojuan icons"></i>
      <span style="font-size: 12px">弹窗效果</span>
    </div>
    <div class="main-div-child" @click="goTransform">
      <i class="iconfont icon-donghuaguanli icons"></i>
      <span style="font-size: 12px">动画效果</span>
    </div>
    <div class="main-div-child" @click="goIpc">
      <i class="iconfont icon-tongxin icons"></i>
      <span style="font-size: 12px">窗口通信</span>
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
      goWindows () {
        this.$store.dispatch('changeTransition', 'slipLeft')
        this.$router.push('/windows')
      },
      goTransform () {
        this.$store.dispatch('changeTransition', 'slipLeft')
        this.$router.push('/transform')
      },
      goIpc () {
        this.$store.dispatch('changeTransition', 'slipLeft')
        this.$router.push('/ipc')
      }
    },
    mounted: function () {
    }
  }
</script>
<style>
.main-div {
  width: 100%;
  height: 100%;
  display: flex;
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
}
</style>
