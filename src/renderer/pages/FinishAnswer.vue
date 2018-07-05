<template>
  <Frame>
    <renderHead slot="header"></renderHead>
    <div class="bodyStyle">
      <div class="flexBody">
        <div style="display: flex;height:100%;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
          <div class="rowLine" style="padding-top: 0px">
            <span style="width: 80px">回答：</span>
            <h3>正确</h3>
          </div>
          <div style="background: rgba(0, 0, 0, 0.2);border-radius: 3px;width: 100%;padding: 10px;box-sizing: border-box;justify-content: center;height: 100%;display: flex;">
            <div style="width: 50%">
              难度： 评论：
            </div>
            <div style="width: 50%">
              相关评论 相关题型 相关知识点
            </div>
          </div>
        </div>
        <div style="display: flex;justify-content: center;height: 60px;align-items: center;padding: 0 10px 10px 10px;">
          <div style="display: flex;align-items: center;">
            <i class="iconfont icon-tijiao" @mouseover="pinglun" @mouseout="outHide" style="font-size: 40px;margin: 0 50px;"></i>
          </div>
        </div>
      </div>
    </div>
  </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import renderHead from '@/components/header/renderHead.vue'
import userHeadInfo from '@/components/user/userHeadInfo.vue'
export default {
  name: 'FinishAnswer',
  data () {
    return {
      ps: 3,
      win: ''
    }
  },
  methods: {
    gotoHome () {
      this.$store.dispatch('changeTransition', 'default')
      this.$router.push('/')
    },
    login () {
      this.$store.dispatch('changeTransition', 'rotate')
      this.$router.push('/login')
    },
    back () {
      this.$store.dispatch('changeTransition', 'flipx')
      this.$router.push('/answer')
    },
    pinglun () {
      console.log(this.$Win.win.getPosition())
      console.log(window.screen.height)
      console.log(window.screen.width)
      this.$store.dispatch('changeTransition', 'slipUp')
      // 确定新窗口位置
      // 老窗口位置
      let fatherBounds = this.$Win.win.getBounds()
      // 老窗口大小
      console.log(fatherBounds)
      console.log(this.$Win.win.getBounds())
      // 新窗口宽度
      let width = 200
      // 判断右边是否过界
      let leftWidth = window.screen.width - fatherBounds.width - fatherBounds.x - width

      let x = leftWidth >= 0 ? fatherBounds.width + fatherBounds.x : fatherBounds.x - width
      let y = fatherBounds.y

      this.win = this.$Win.createWin({
        width: 200,
        height: 300,
        router: '/answering',
        name: 'answering',
        x: x,
        y: y,
        alwaysOnTop: true,
        skipTaskbar: true
      })
      this.$Win.openWin(this.win, true)
    },
    outHide () {
      console.log(this.win)
      this.win.close()
    }
  },
  components: { renderHead, userHeadInfo, Frame }
}
</script>
<style>
.bodyStyle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  word-break: break-all;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.flexBody {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.rowLine {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0
}

.iconfont {
  cursor: pointer;
}

.checkBoxStyle {
  display: flex;
  align-items: center;
  padding: 5px 0
}

.el-checkbox,
.el-checkbox__input {
  white-space: normal;
}

.checkSpan {
  font-weight: 900;
  margin-right: 6px;
  margin-bottom: 3px;
}
</style>