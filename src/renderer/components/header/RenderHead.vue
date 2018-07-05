<template>
    <div class="header">
        <span style="margin-left: 5px;font-size: 13px">{{title}}</span>
        <div class="rightBox">
            <i @click="hideWindow" class="rightIcon iconfont icon-zuixiaohua"></i>
            <i @click="closeWindow" class="rightIconLast rightIcon iconfont icon-guanbi5"></i>
            <!-- <i onclick="fullWindow()" class="rightIcon iconfont el-icon-h-zuidahua"></i> -->
        </div>
    </div>
</template>
<script>
import { remote } from 'electron'
export default {
  name: 'renderHead',
  methods: {
    closeWindow () {
      this.$Win.closeWin()
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
    }
  },
  computed: {
    title: function () {
      return this.$router.currentRoute.meta.title
    }
  }
}
</script>
<style scoped>
.header {
    height: 30px;
    -webkit-app-region: drag;
    display: flex;
    padding: 2px;
    justify-content: space-between;
    align-items: center;
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

.rightBox {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}
</style>