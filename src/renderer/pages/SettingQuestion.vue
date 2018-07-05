<template>
  <Frame>
    <renderHead slot="header"></renderHead>
  </Frame>
</template>
<script>
  import Frame from '@/components/frame/mainFrame.vue'
  import renderHead from '@/components/header/renderHead.vue'
  export default {
    name: 'SettingQuestion',
    data () {
      return {
      }
    },
    components: { Frame, renderHead }
  }
</script>
<style>

</style>
