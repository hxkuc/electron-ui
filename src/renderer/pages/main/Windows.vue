<template>
  <div class="main-div">
    <div class="main-child">
      <div class="main-div-child" @click="openNewWin">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">新窗口(多开)</span>
      </div>
      <div class="right-text">可以任意的重复打开多个窗口，窗口不复用</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSingleWin">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">新窗口(单开)</span>
      </div>
      <div class="right-text">给窗口命名后，窗口即变为单开，重复打开会复用窗口</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSingleWinReload">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">新窗口(重载)</span>
      </div>
      <div class="right-text">如果有相同name的窗口已经打开，此操作会重载打开的窗口路由（相同路由不会重载）</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openSlip">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">右下角弹出</span>
      </div>
      <div class="right-text">右下角弹出窗口可以作为信息提示</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @mouseenter="openLeft" @mouseleave="closeLeft">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">鼠标悬停</span>
      </div>
      <div class="right-text">鼠标事件，自动触发</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click="openRight">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">右侧弹出</span>
      </div>
      <div class="right-text">右侧弹出</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click.stop="pinglun">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">跟随主窗口</span>
      </div>
      <div class="right-text">跟随主窗口位置展现窗口，自动判断左边或者右边弹出</div>
    </div>

    <div class="main-child">
      <div class="main-div-child" @click.stop="dropDown">
        <i class="iconfont icon-jiaojuan icons"></i>
        <span style="font-size: 12px">落地窗口</span>
      </div>
      <div class="right-text">窗口落地效果</div>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        timeTap: null
      }
    },
    methods: {
      async openNewWin () {
        this.$store.dispatch('changeTransition', 'default')
        let res = await this.$Win.openWin({
          width: 450,
          height: 350,
          windowConfig: {
            router: '/newWindow'
          }
        })
        console.log(res)
      },
      async openSingleWin () {
        this.$store.dispatch('changeTransition', 'default')
        let res = await this.$Win.openWin({
          width: 450,
          height: 350,
          windowConfig: {
            router: '/newWindow',
            name: 'setting',
            vibrancy: true
          }
        })
        console.log(res)
      },
      async openSingleWinReload () {
        this.$store.dispatch('changeTransition', 'default')
        let res = await this.$Win.openWin({
          width: 450,
          height: 350,
          windowConfig: {
            router: '/setting',
            name: 'setting',
            reload: true,
            vibrancy: true
          }
        })
        console.log(res)
      },
      async openSlip () {
        this.$store.dispatch('changeTransition', 'default')
        let x = window.screen.availWidth - 300 + 5
        let y = window.screen.availHeight - 200 + 5
        let res = await this.$Win.openWin({
          width: 300,
          height: 200,
          x: x,
          y: y,
          windowConfig: {
            router: '/newWindow',
            name: 'pop',
            animation: 'fromBottom',
            vibrancy: true
          }
        })
        console.log(res)
      },
      async openRight () {
        this.$store.dispatch('changeTransition', 'default')
        let x = window.screen.availWidth - 300 + 5
        let y = window.screen.availHeight - 200 + 5
        let res = await this.$Win.openWin({
          width: 300,
          height: 200,
          x: x,
          y: y,
          windowConfig: {
            animation: 'fromRight',
            router: '/newWindow',
            name: 'popLeft',
            reload: true,
            vibrancy: true
          }
        })
        console.log(res)
      },
      pinglun (e) {
        this.$store.dispatch('changeTransition', 'default')
        // 确定新窗口位置
        // 老窗口位置
        let fatherBounds = this.$Win.win.getBounds()
        // 老窗口大小
        // 新窗口宽度
        let width = 200
        // 判断右边是否过界
        let leftWidth = window.screen.width - fatherBounds.width - fatherBounds.x - width
        let x = leftWidth >= 0 ? fatherBounds.width + fatherBounds.x : fatherBounds.x - width
        let y = fatherBounds.y

        let win = this.$Win.createWin({
          width: 200,
          height: 300,
          windowConfig: {
            router: '/newWindow',
            name: 'answering',
            animation: 'fromBottom',
            vibrancy: true
          },
          x: x,
          y: y,
          alwaysOnTop: true,
          skipTaskbar: true
        })
        win.show()
        let a = setTimeout(function () {
          console.log(win)
          win && win.close && win.close()
        }, 5000)
        win.on('close', function () {
          clearTimeout(a)
        })
      },
      async dropDown () {
        this.$store.dispatch('changeTransition', 'default')
        let x = (window.screen.availWidth - 310) / 2
        let y = -210
        let afterY = window.screen.availHeight - 200

        let win = this.$Win.createWin({
          width: 300,
          height: 200,
          x: x,
          y: afterY,
          windowConfig: {
            router: '/newWindow',
            name: 'dropDown',
            reload: true,
            vibrancy: true,
            customAnimation: {
              fromPosition: {
                x: x,
                y: y
              }
            }
          }
        })
        win.show()
      },
      openLeft (e) {
        clearTimeout(this.timeTap)
        this.$store.dispatch('changeTransition', 'default')
        console.log(e)
        // 确定新窗口位置
        // 老窗口位置
        let fatherBounds = this.$Win.win.getBounds()
        // 老窗口大小
        // 新窗口宽度
        let width = 300
        // 判断右边是否过界
        let leftWidth = window.screen.width - fatherBounds.width - fatherBounds.x - width
        let x = leftWidth >= 0 ? fatherBounds.width + fatherBounds.x : fatherBounds.x - width
        let y = fatherBounds.y

        let win = this.$Win.createWin({
          width: 300,
          height: 200,
          windowConfig: {
            router: '/newWindow',
            name: 'leftname',
            reuse: true,
            reload: true,
            vibrancy: true
          },
          x: x,
          y: y,
          alwaysOnTop: true,
          skipTaskbar: true
        })
        win.show()
        this.timeTap = setTimeout(function () {
          console.log(win)
          this.$Win.exitWin({}, win)
          // win && win.hide && win.hide()
        }, 5000)
      },
      closeLeft () {
        clearTimeout(this.timeTap)
        let win = this.$Win.getWinByName('leftname')
        this.$Win.exitWin({}, win)
        // win.hide()
      }
    },
    mounted: function () {
      console.log(this.$Win.win)
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
