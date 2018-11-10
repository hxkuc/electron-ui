<template>
    <Frame>
      <InfoHead slot="header"></InfoHead>
      <div class="main-div">
        <img src="~@/assets/electron.png" style="width: 30vw;">
        <span class="ele-font">electron-ui-{{data.name}}</span>
      </div>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import InfoHead from '@/components/header/InfoHead.vue'
export default {
  data () {
    return {
      data: {}
    }
  },
  components: { Frame, InfoHead },
  mounted: function () {
    this.data = this.$Win.getParameter()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(66666)
    console.log(this.$Win)
    console.log(this.$Win.getParameter())
    console.log(this.$route.query)
    this.data = this.$Win.getParameter()
  }
}
</script>
<style scoped>
.main-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ele-font{
	font-size: 30px;
	padding: 15px;
}
</style>