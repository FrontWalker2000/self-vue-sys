<template>
  <!--轮播-->
  <div class="upload">
    <div class="upload_img" :class="{space_pad: (btnTitle && imgList.length > 0)}">
      <div class="img_list" :class="{btn_img_title: btnTitle}" v-for="(item, index) in imgList" :key="index" @click="scaleLargeSwiper(index)">
        <i class="img_close el-icon-error" @click="delImg(index, $event)"></i>
        <img class="img" :src="item">
      </div>
      <div v-if="imgList.length < maxImgLength">
        <template v-if="!btnTitle" >
          <div class="img_list upload_line">
            <div class="add" :class="{text: text}">＋</div>
            <div v-if="text" class="tip">{{text}}</div>
            <input ref="input" type="file" accept="image/*" multiple="multiple" @change="handleFileChange">
          </div>
        </template>
        <template v-else>
          <div class="upload_text">
            <input ref="input" class="btn" type="file" accept="image/*" multiple="multiple" @change="handleFileChange">
            <span>{{btnTitle}}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 按钮文字
    btnTitle: {
      default: '',
      type: String
    },
    // 最大图片数
    maxImgLength: {
      default: 5,
      type: Number
    },
    // 默认已有图片
    outImgList: {
      type: Array,
      default() {
        return []
      }
    },
    // 最大上传
    maxSize: {
      default: 2,
      type: Number
    },
    text: {
      default: ''
    }
  },
  name: "upload",
  data(){
    return {
      // 图片最大宽度
      maxWidth: 1000,
      // 图片最大高度
      maxHeight: 1000,
      // 图片集合
      imgList: [],
      // 是否显示轮播
      isShowSwiper: false,
      // 默认显示索引
      defaultIndex: 0,
      // 显示loading
      isLoading: false
    }
  },
  created() {
    this.imgList = [...this.outImgList]
  },
  methods: {
    // 图片文件处理
    handleFileChange(data) {
      let files = data.target.files
      let size,
        len = files.length > 5 ? 5 : files.length
      this.isLoading = true
      for (let i = 0; i < len; i++) {
        size = files[i].size / 1024 / 1024
        let FR = new FileReader()
        FR.readAsDataURL(files[i])
        FR.onload = (e) => {
          // 大于2M
          if (Math.floor(size) > parseInt(this.maxSize)) {
            this.checkImgSize(e.target.result, files[i])
          } else {
            let base64 = e.target.result
            this.getPathByUpload(files[i], base64)
          }
        }
      }
    },
    // 校验图片大小
    checkImgSize(url, file) {
      let img = new Image()
      img.src = url
      img.onload = () => {
        let { width: originW, height: originH } = img
        if (originW > this.maxWidth || originH > this.maxHeight) {
          if (originW > originH) {
            //宽大于高
            let rat = Math.ceil(originW / this.maxWidth),
              targetW = Math.floor(originW / rat), //目标的宽度
              targetH = Math.floor(originH / rat) //目标的高度
            this.imgPress(img, targetW, targetH, file )
          } else {
            //高大于宽
            let rat = Math.ceil(originH / this.maxHeight),
              targetW= Math.floor(originW / rat),
              targetH = Math.floor(originH / rat)
            this.imgPress( img, targetW, targetH, file)
          }
        }
      }
    },
    // 图片压缩
    imgPress(img, w, h, file) {
      let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        anw = document.createAttribute('width'),
        anh = document.createAttribute('height')
      anw.nodeValue = w
      anh.nodeValue = h
      canvas.setAttributeNode(anw)
      canvas.setAttributeNode(anh)
      ctx.drawImage(img, 0, 0, w, h)
      let base64 = canvas.toDataURL('image/jpeg', 0.9)
      this.getPathByUpload(file, base64)
    },
    //图片上传获取路径
    async getPathByUpload(file, url){
      let imgUrl = url
      this.imgList.push(imgUrl)
      if (this.imgList.length > this.maxImgLength) {
        this.imgList = this.imgList.slice(0, this.maxImgLength)
      }
      this.isLoading = false
      this.$emit('addImg', this.imgList)
    },
    // 删除图片
    delImg(index, e) {
      e.stopPropagation()
      this.imgList.splice(index, 1)
      this.$refs.input && (this.$refs.input.value = null)
      this.$emit('delImg', this.imgList)
    },
    // 放大轮播
    scaleLargeSwiper(id) {
      this.isShowSwiper = true
      this.defaultIndex = id
    },
    // 关闭model
    closeModel(bool) {
      this.isShowSwiper = bool
    }
  }
}
</script>

<style scoped lang="less">
// 上传及描述
.upload {
  // 上传图片
  .upload_img {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-bottom: 50px;
    .img_list {
      margin-top: 24px;
      width: 160px;
      height: 160px;
      overflow: hidden;
      margin-right: 20px;
      position: relative;
      .img_close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 30px;
      }
      .img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        display: block;
      }
    }
    .btn_img_title {
      width: 400px;
      height: 260px;
    }
    .upload_text {
      width: 350px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #9F5ABA;
      color: #9F5ABA;
      font-size: 32px;
      border-radius: 40px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .btn{
        width: 350px;
        height: 80px;
        background: #ccc;
        position: absolute;
        left: 0;
        opacity: 0;
        top: 0;
      }
    }
    .img_list:nth-child(3n) {
      margin-right: 0;
    }
  }
  .space_pad {
    padding-bottom: 0px;
  }
  .upload_line {
    border: 2px dashed rgba(0,0,0,0.15);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    input {
      width: 160px;
      height: 160px;
      position: absolute;
      opacity: 0;
    }
    .add{
      color: #969798;
      font-size: 60px;
      position: relative;
      &.text{
        font-size: 40px;
      }
    }
    .tip{
      font-size: 22px;
      font-weight: 400;
      color: #969798;
      line-height: 26px;
    }
  }
  .mint-loading {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}
</style>

