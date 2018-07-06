<template>
  <Frame>
    <renderHead slot="header"></renderHead>
    <div class="main-div">
      <el-form class="demo-form-inline" style="padding: 20px;width: 100%;">
        <el-form-item label="接收数据">
          <el-input type="textarea" v-model="redata" autosize></el-input>
        </el-form-item>
      </el-form>
    </div>
  </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import renderHead from '@/components/header/renderHead.vue'
export default {
  components: { Frame, renderHead },
  data () {
    return {
      redata: ''
    }
  },
  mounted: function () {
    this.$Win.getMsg((data) => {
      this.redata += data.data
    })
  }
}
</script>
<style>
.main-div {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>