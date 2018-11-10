<template>
    <div class="header">
        <span style="margin-left: 5px;font-size: 13px">{{title}}</span>
        <div class="rightBox">
            <i @click="hideWindow" class="rightIcon iconfont icon-shezhi2"></i>
            <i @click="closeWindow" class="rightIconLast rightIcon iconfont icon-guanbi5"></i>
            <!-- <i onclick="fullWindow()" class="rightIcon iconfont el-icon-h-zuidahua"></i> -->
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    closeWindow () {
      this.$Win.closeWin()
    },
    hideWindow () {
      console.log(11)
      this.$store.dispatch('changeTransition', 'flipx')
      this.$router.replace('/newWindow')
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