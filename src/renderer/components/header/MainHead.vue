<template>
  <div class="header">
    <userHeadInfo></userHeadInfo>
    <div class="rightBox">
      <i @click="hideWindow" class="rightIcon iconfont icon-zuixiaohua"></i>
      <i @click="closeWindow" class="rightIconLast rightIcon iconfont icon-guanbi5"></i>
      <!-- <i onclick="fullWindow()" class="rightIcon iconfont el-icon-h-zuidahua"></i> -->
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'
import userHeadInfo from '@/components/user/userHeadInfo.vue'
export default {
  name: 'mainHead',
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
      this.$router.push('/login')
    }
  },
  components: {userHeadInfo}
}
</script>

<style scoped>
  .header {
    height: 60px;
    display: flex;
    padding: 2px;
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

.rightBox{
	width: 25%;
	display: flex;
	justify-content: flex-end;
}
</style>
