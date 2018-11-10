<template>
    <Frame>
      <SettingHead slot="header"></SettingHead>
      <div class="main-div">
        <img src="~@/assets/electron.png" style="width: 30vw;">
        <span class="ele-font">electron-ui</span>
      </div>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import SettingHead from '@/components/header/SettingHead.vue'
export default {
  data () {
    return {
      data: {}
    }
  },
  components: { Frame, SettingHead },
  mounted: function () {
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