<template>
  <section class="edit_cont">
    <div id="edit_bar" class=""></div>
    <div id="edit_text"></div>
  </section>
</template>

<script>
import E from 'wangeditor'
export default {
  name: "index",
  data() {
    return {
      // 编辑器实例
      editor: null
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    // 初始化编辑器
    initEditor () {
      this.editor = new E('#edit_bar', '#edit_text')
      this.editor.config.height = 300
      this.editor.config.placeholder = '请输入文章内容'
      this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
      this.editor.config.uploadImgMaxLength = 1
      this.editor.config.uploadImgServer = ''
      this.editor.config.menus = [
        'undo',
        'redo',
        'bold',
        'head',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'table',
        'splitLine'
      ]
      this.selfUpImage()
      this.editor.create()
    },
    // 设置加入本地上传图片
    selfUpImage () {
      this.editor.config.customUploadImg = (resultFiles, insertImgFn) => {
        // this.handleBeforeUpload(null, resultFiles, insertImgFn)
      }
    },
  }
}
</script>

<style scoped lang="less">
.edit_cont {
  margin-top: 30px;
  margin-right: 20px;
  #edit_bar {
    border-bottom: 1px solid #f3f1f1;
    position: relative;
    z-index: 10;
  }
  #edit_bar .w-e-toolbar {
    background-color: #eeeeee;
  }
  #edit_text {
    height: 260px;
    position: relative;
    z-index: 9;
  }
}

</style>
