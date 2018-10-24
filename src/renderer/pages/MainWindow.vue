<template>
    <Frame>
      <mainHead slot="header"></mainHead>
      <mainFooter slot="footer"></mainFooter>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import mainHead from '@/components/header/mainHead.vue'
import mainFooter from '@/components/footer/MainFooter.vue'
export default {
  name: 'MainWindow',
  components: { Frame, mainHead, mainFooter }
}
</script>
<style>

.iconfont{
  cursor: pointer;
}
</style>