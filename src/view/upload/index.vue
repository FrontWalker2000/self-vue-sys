<template>
  <div>
    <upload @addImg="addImg" @delImg="delImg" :maxImgLength="3"></upload>
  </div>
</template>

<script>
import upload from '../../components/upload'
export default {
  name: "index",
  components: {upload},
  data() {
    return {
      image_url: []
    }
  },
  methods: {
    addImg(param) {
      this.image_url = param[0]
    },
    delImg(param) {
      this.image_url = param[0]
    },
  }
}
</script>

<style scoped>

</style>
