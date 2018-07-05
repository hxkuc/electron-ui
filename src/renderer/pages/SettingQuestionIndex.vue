<template>
  <div class="main-class">
    <div class="main-body">

        <el-input type="textarea" v-model="asd" autosize placeholder="请添加题目"></el-input>

      <div>
        <el-button type="primary" size="mini" style="margin: 5px 0" @click="addAnswer">添加答案</el-button>
        <div style="display: flex;margin-bottom: 5px;flex-direction: column;background: #e6e6e6;" v-for="(item, key) in answerArr">
          <el-input style="border-radius: 0px" type="textarea" v-model="answerArr[key]['value']" autosize></el-input>
          <div style="text-align: right;padding: 3px;">
            <i class="el-icon-remove" style="font-size: 20px;cursor: pointer;" @click="deletes(key)"></i>
            <i class="el-icon-circle-check" style="font-size: 20px;cursor: pointer;" :class="{active: item['select']}" @click="selectthis(key)"></i>
            <!-- <i class="iconfont icon-xiangshangshouqi-yuankuang" style="font-size: 20px;cursor: pointer;" @click="deletes(key)"></i>
            <i class="iconfont icon-xiangxiazhankai-yuankuang" style="font-size: 20px;cursor: pointer;" @click="deletes(key)"></i> -->
          </div>
        </div>
      </div>


      
    </div>
    <div class="main-body">
      <div class="markdown-body" v-html="aser" style="padding: 5px;border-bottom: 1px dashed;font-size: 14px;"></div>
      <div style="padding: 5px">
        <div class="markdown-body" v-for="(item, key) in answeredArr" style="padding:0 5px;display: flex;font-size: 14px">
          <span style="margin-right: 5px">{{ziMuArr[key]}}.</span><div v-html="answeredArr[key]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {markdown} from 'markdown'
import myMarked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
import 'github-markdown-css/github-markdown.css'
// Set options
// `highlight` example uses `highlight.js`
myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  highlight: function (code, lang, callback) {
    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs lang-',
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

export default {
  name: 'index',
  data () {
    return {
      asd: '',
      answerArr: [],
      ziMuArr: ['A', 'B', 'C', 'D', 'E', 'F']
    }
  },
  methods: {
    addAnswer () {
      if (this.answerArr.length >= 6) {
        return false
      }
      this.answerArr.push({select: false, value: ''})
    },
    deletes (key) {
      this.answerArr.splice(key, 1)
    },
    selectthis (key) {
      this.answerArr[key].select = !this.answerArr[key].select
    }
  },
  computed: {
    aser: function () {
      // Compile
      return myMarked(this.asd)
    },
    answeredArr: function () {
      return this.answerArr.map(row => myMarked(row.value))
    }
  }
}
</script>
<style>
.main-class {
  height: 100%;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
}
.my-editor {
  line-height: normal;
}
.main-body{
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow-y: auto;
}
.markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre {
    margin-top: 0;
    margin-bottom: 5px;
}
.active{
  color: green
}
textarea{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>