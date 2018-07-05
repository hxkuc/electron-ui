<template>
    <Frame>
      <renderHead slot="header"></renderHead>
      <mainFooter slot="footer"></mainFooter>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import renderHead from '@/components/header/renderHead.vue'
import mainFooter from '@/components/footer/MainFooter.vue'
export default {
  name: 'MainWindow',
  components: {Frame, renderHead, mainFooter}
}
</script>
<style>

.iconfont{
  cursor: pointer;
}
</style>