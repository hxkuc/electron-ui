<template>
  <Frame>
    <mainHead slot="header"></mainHead>
    <div style="width:100%;height:100%;overflow-y: auto; word-break: break-all;border-bottom-right-radius: 3px;border-bottom-left-radius: 3px;">
        <div style="display: flex;flex-direction: column;height: 100%;">
            <div style="display: flex;height: 60px;align-items: center;justify-content: space-around;margin-top: 40px;">
                <div style="display: flex;flex-direction: column;cursor: pointer;" @click="gotoHome">
                    <i class="iconfont icon-guanjiaowangtubiao01" style="font-size: 30px"></i>
                    <span style="text-align: center;font-size: 12px;font-weight: 900;margin-top: 10px;">登录</span>
                </div>
            </div>
            <div style="display: flex;height:200px;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
              <el-input placeholder="请输入用户名"></el-input>
              <el-input placeholder="请输入密码！"></el-input>
              <div style="width: 100%;display: flex">
                <el-button style="width: 50%">登录</el-button>
                <el-button style="width: 50%" @click="register">注册</el-button>
              </div>
            </div>
            <div>
              <p style="text-align: center;font-size: 12px;">--其他方式登录--</p>
              <div style="display: flex;justify-content: center;margin-top: 10px;">
                <i class="iconfont icon-btn_qq" style="font-size: 20px;margin: 0 5px;"></i>
                <i class="iconfont icon-btn_wechat" style="font-size: 20px;margin: 0 5px;"></i>

              </div>
            </div>
        </div>
    </div>
  </Frame>
</template>
<script>
import { remote } from 'electron'
import Frame from '@/components/frame/mainFrame.vue'
import mainHead from '@/components/header/mainHead.vue'
export default {
  name: 'Login',
  methods: {
    closeWindow () {
      remote.app.quit()
    },
    fullWindow () {
      let win = remote.getCurrentWindow()
      let html = document.getElementsByTagName('html')[0]
      if (!html.style.padding || html.style.padding === '5px') {
        html.style.padding = '0px'
        win.maximize()
        win.setMovable(false)
      } else {
        html.style.padding = '5px'
        win.unmaximize()
        win.setMovable(true)
      }
    },
    hideWindow () {
      let win = remote.getCurrentWindow()
      if (win.isMinimized()) {
        win.restore()
      } else {
        win.minimize()
      }
    },
    gotoHome () {
      this.$store.dispatch('changeTransition', 'flip')
      this.$router.push('/')
    },
    register () {
      this.$store.dispatch('changeTransition', 'slipRight')
      this.$router.push('/register')
    }
  },
  components: {Frame, mainHead}
}
</script>
<style scoped>

.header {
    height: 60px;
    -webkit-app-region: drag;
}

.rightIcon {
    float: right;
    font-size: 18px;
    padding: 5px 0px 5px 4px;
    cursor: pointer;
    -webkit-app-region: no-drag;
}

.rightIcon:hover {
    color: #ff001a;
}

.rightIconLast {
    padding-right: 5px;
}
</style>