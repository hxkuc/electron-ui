<template>
  <Frame>
    <renderHead slot="header"></renderHead>
    <div style="padding: 5px;display: flex; flex-direction: column;height: 100%;box-sizing: border-box;">
      <div style="flex-grow: 1;display: flex;flex-wrap: wrap;overflow-y: auto;">
            <div style="width: 120px;height: 120px;border: 1px solid #fff" v-for="imgs in imgArr">
              <div @click="selectImg(imgs)" class="zoomImage" :style="{'background-image': 'url(static/background/' + imgs + ')'}"></div>
            </div>
      </div>
      <div style="height: 40px;display: flex;flex-shrink: 0;">
        <div class="colorClass" @click="asdf(c)" :style="{'background-color': c}" v-for="c in colorArr"></div>
        <div class="colorClass">
          <el-color-picker @active-change="asdf" v-model="color3" show-alpha></el-color-picker>
        </div>
      </div>
    </div>
    <div slot="footer" style="display: flex;height: 30px; background:#fff;color: #000;padding: 5px">
      <el-button icon="el-icon-plus" size="mini"  type="primary" @click="openDialog">自定义</el-button>
      <el-slider :disabled="this.$store.state.BaseConfig.backGroundType == 2" @change="change" :max="25" v-model="value" style="width: 200px;margin-left: 15px"></el-slider>
      <el-color-picker class="fontColor" @active-change="changeFontColor" v-model="fontColor" show-alpha></el-color-picker>
    </div>
  </Frame>
</template>
<script>
  import Frame from '@/components/frame/mainFrame.vue'
  import renderHead from '@/components/header/renderHead.vue'
  import {remote} from 'electron'
  import fs from 'fs'
  export default {
    name: 'Setting',
    data () {
      return {
        value: this.$store.state.BaseConfig.backGroundBlur,
        color3: '',
        fontColor: '',
        imgArr: [],
        colorArr: ['#009BDB', '#288ADD', '#31A66B', '#DA434E', '#E56281', '#B1639F', '#6B51C0', '#595CA0', '#3074C1', '#00829A', '#159C77', '#4FB0AC', '#7AC5C4', '#9BB7D6', '#804D4D', '#F0BC59', '#CFBAAA']
      }
    },
    methods: {
      change: function (d) {
        this.$store.commit('CHANGE_BACKGROUNDBLUR', d)
      },
      asdf (color) {
        console.log(color)
        this.$store.commit('CHANGE_COLOR', color)
      },
      changeFontColor (color) {
        this.$store.commit('CHANGE_FONTCOLOR', color)
      },
      selectImg (img) {
        this.$store.commit('CHANGE_BACKGROUNDIMG', img)
      },
      openDialog () {
        let win = remote.getCurrentWindow()
        remote.dialog.showOpenDialog(win, {
          title: '选择背景图片',
          filters: [
            { name: '图片', extensions: ['png', 'jpeg', 'jpg', 'gif'] }
          ]
        }, (filePaths, bookmarks) => {
          // 拷贝文件
          if (filePaths && filePaths[0]) {
            // 重命名文件
            let fileName = new Date().getTime() + filePaths[0].substring(filePaths[0].lastIndexOf('.'))
            let writeStream = fs.createWriteStream(__static + '/background/' + fileName)
            writeStream.on('finish', () => {
              this.selectImg(fileName)
              this.showImg()
            })
            fs.createReadStream(filePaths[0]).pipe(writeStream)
          }
        })
      },
      showImg () {
        fs.readdir(__static + '/background', (err, files) => {
          if (!err) {
            files = files.filter(row => {
              return /\.(png|jpe?g|gif)(\?.*)?$/.test(row)
            })
          }
          this.imgArr = files
        })
      }
    },
    mounted: function () {
      this.showImg()
    },
    components: { Frame, renderHead }
  }
</script>
<style>
.zoomImage{
  width:100%;
  height:0;
  padding-bottom: 100%;
  overflow:hidden;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  background-size:cover;
  cursor: pointer;
  animation: mymove 2s
}
@keyframes mymove
{
  from {opacity: 0}
  to {opacity: 1}
}
.el-color-picker__trigger {
  padding: 0px;
  border: none;
  border-radius: 0px;
}
.colorClass{
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 1px;
}

.fontColor > .el-color-picker__trigger {
  width: 30px;
  height: 30px;
  margin-left: 20px
}

</style>
