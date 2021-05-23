<template>
  <section class="header_cont">
    <div class="cont_aside">
      <span>
        <i class="el-icon-platform-eleme"></i>
        Nthorud
      </span>
      <span>
        <i class="el-icon-more"></i>
      </span>
    </div>
    <div class="cont_main">
      <div class="main">
        <div class="main_search">
          <i class="el-icon-search"></i>
          <input placeholder= "请输入..." />
        </div>
        <div class="main_bar">
          <span class="s1">
            <i class="el-icon-s-promotion"></i>
          </span>
          <span class="s2">
            <i class="el-icon-s-opportunity"></i>
          </span>
          <span class="s3">
            <i class="el-icon-s-comment"></i>
          </span>
          <img src="../assets/images/common/head.jpeg">
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'headTop',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.header_cont {
  background: #fff;
  min-height: 60px;
  width: 100%;
  position: fixed;
  z-index: 1001;
  box-shadow: 0 0 5px rgb(18 23 39 / 50%);
  .cont_aside {
    float: left;
    width: 250px;
    height: 62px;
    background: #1572e8!important;
    font-size: 17px;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      color: #ffffff;
      font-weight: bold;
      font-size: 15px;
    }
    .el-icon-platform-eleme {
      color: #ffffff;
      font-size: 34px;
      padding-right: 8px;
    }
    .el-icon-more {
      color: #ffffff;
      font-size: 30px;
    }
  }
  .cont_main {
    background: #1269db!important;
    height: 62px;
    padding: 0 15px;
    display: flex;
    align-items: center;

    .main {
      padding-right: 15px;
      padding-left: 15px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      input::-webkit-input-placeholder {
        color: #ffffff;
        font-size: 14px;
      }
      .main_search {
        background: #155ab5;
        height: 42px;
        width: 45%;
        position: relative;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        i {
          color: #ffffff;
          font-weight: bold;
        }
        input {
          width: 90%;
          height: 100%;
          background: #155ab5;
          padding-left: 5px;
          border: 0;
          color: #ffffff;
          outline: none;
        }
      }
      .main_bar {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          padding: 0 10px;
          i{
            color: #ffffff;
            font-size: 22px;
          }
        }
        img {
          width: 38px;
          height: 38px;
          position: relative;
          margin-right: 6px;
          border-radius: 100%;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
