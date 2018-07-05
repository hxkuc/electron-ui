<template>
    <Frame>
        <renderHead slot="header"></renderHead>
        <div class="bodyStyle">
            <div class="flexBody">
                <div style="display: flex;height:100%;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
                  <div class="rowLine" style="padding-top: 0px">
                    <span style="width: 80px">发起者：</span> 
                    <userHeadInfo width="50%"></userHeadInfo>
                  </div>

                  <div class="rowLine">
                    <span style="width: 80px">方向：</span> 
                    <el-tag size="mini">标签一</el-tag>
                    <el-tag type="success" size="mini">标签二</el-tag>
                    <el-tag type="info" size="mini">标签三</el-tag>
                    <el-tag type="warning" size="mini">标签四</el-tag>
                    <el-tag type="danger" size="mini">标签五</el-tag>
                  </div>
                  <div class="rowLine">
                    <span style="width: 80px">难度：</span>
                    <el-rate
                      v-model="ps"
                      :colors="['green', '#F7BA2A', 'red']" show-text>
                    </el-rate>
                  </div>

                  <div class="rowLine">
                    <span style="width: 80px">正确率：</span>
                    <div style="width: 100%;display: flex;align-items: center;">
                      <span style="font-size: 10px">正确： 300人</span>
                      <div style="width: 100%"><el-progress :text-inside="true" :stroke-width="18" :percentage="80" status="success"></el-progress></div>
                      <span style="font-size: 10px">错误： 100人</span>
                    </div>
                    
                  </div>


                  <div class="rowLine">
                    <span style="width: 80px">平均用时：</span>
                    <div style="width: 100%;display: flex;align-items: center;">
                      14：32秒
                    </div>
                  </div>

                </div>

                <div style="display: flex;justify-content: center;height: 60px;align-items: center;padding: 10px 0">
                  <div></div>
                  <div style="display: flex;align-items: center;">
                    <i class="iconfont icon-xiayishou1" style="font-size: 20px;margin: 0 5px;"></i>
                    <i class="iconfont icon-kaishi" @click="next" style="font-size: 40px;margin: 0 50px;"></i>
                    <i class="iconfont icon-shouye4" style="font-size: 20px;margin: 0 5px;"></i>
                  </div>
                  <div style="display: flex;align-items: center;">
                    <i class="iconfont icon-suiji" style="font-size: 20px;margin: 0px 5px 0 50px;;"></i>
                  </div>
                  
                  
                </div>

            </div>
        </div>
    </Frame>
</template>
<script>
import Frame from '@/components/frame/mainFrame.vue'
import renderHead from '@/components/header/renderHead.vue'
import userHeadInfo from '@/components/user/userHeadInfo.vue'
export default {
  name: 'BeginAnswer',
  data () {
    return {
      ps: 3
    }
  },
  methods: {
    gotoHome () {
      this.$store.dispatch('changeTransition', 'default')
      this.$router.push('/')
    },
    login () {
      this.$store.dispatch('changeTransition', 'rotate')
      this.$router.push('/login')
    },
    next () {
      this.$store.dispatch('changeTransition', 'flipx')
      this.$router.push('/answering')
    }
  },
  components: {renderHead, userHeadInfo, Frame}
}
</script>
<style>

.bodyStyle {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    word-break: break-all;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.flexBody {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.rowLine {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0
}
.iconfont{
  cursor: pointer;
}
</style>