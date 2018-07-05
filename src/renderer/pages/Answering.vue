<template>
    <Frame>
        <renderHead slot="header"></renderHead>
        <div class="bodyStyle">
            <div class="flexBody">
                <div style="display: flex;height:100%;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
                  <div class="rowLine">
                    <span style="width: 80px">问：</span> 
                    <h3>这里是题目的标题</h3>
                  </div>

                  <div style="background: rgba(0, 0, 0, 0.2);border-radius: 3px;width: 100%;padding: 10px;box-sizing: border-box;justify-content: center;height: 100%;overflow-y: auto;">

                    <div class="checkBoxStyle">
                      <span class="checkSpan">A</span><el-checkbox style="display: flex;align-items: center;">eeelkjflsdfdsklfjdsklfjdsfrtretioretdfkfifkfd[pdldfdgkffkfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                      </el-checkbox>
                    </div>

                    <div class="checkBoxStyle">
                      <span class="checkSpan">B</span><el-checkbox style="display: flex;align-items: center;">eeelkjflsdfdsklfjdsklfjdsfrtretioretdfkfifkfd[pdldfdgkffkfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                      </el-checkbox>
                    </div>

                    <div class="checkBoxStyle">
                      <span class="checkSpan">C</span><el-checkbox style="display: flex;align-items: center;">eeelkjflsdfdsklfjdsklfjdsfrtretioretdfkfifkfd[pdldfdgkffkfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                      </el-checkbox>
                    </div>

                    <div class="checkBoxStyle">
                      <span class="checkSpan">D</span><el-checkbox style="display: flex;align-items: center;">eeelkjflsdfdsklfjdsklfjdsfrtretioretdfkfifkfd[pdldfdgkffkfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                      </el-checkbox>
                    </div>
                  </div>
                </div>

                <div style="display: flex;justify-content: center;height: 60px;align-items: center;padding: 0 10px 10px 10px;">
                  <div style="font-size: 37px;">12:32</div>
                  <div style="display: flex;align-items: center;">
                    
                    <i class="iconfont icon-tijiao" @click="finish" style="font-size: 40px;margin: 0 50px;"></i>
                    
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
  name: 'Answer',
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
    back () {
      this.$store.dispatch('changeTransition', 'flipx')
      this.$router.push('/answer')
    },
    finish () {
      this.$store.dispatch('changeTransition', 'flipx')
      this.$router.push('/finishAnswer')
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
.checkBoxStyle{
  display: flex;
  align-items: center;
  padding: 5px 0
}
.el-checkbox, .el-checkbox__input {
    white-space: normal;
}
.checkSpan{
  font-weight: 900;
  margin-right: 6px;
  margin-bottom: 3px;
}
</style>