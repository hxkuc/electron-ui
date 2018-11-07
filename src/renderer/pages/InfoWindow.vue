<template>
    <Frame>
      <InfoHead slot="header"></InfoHead>
      <div class="main-div">
        <img src="~@/assets/electron.png" style="width: 30vw;">
        <span class="ele-font">electron-ui</span>
      </div>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import InfoHead from '@/components/header/InfoHead.vue'
export default {
  components: { Frame, InfoHead }
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