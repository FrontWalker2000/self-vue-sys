<template>
  <div class="side_bar">
    <div class="user">
      <div class="user_img">
        <img class="img" alt="" src="../assets/images/common/head.jpeg">
        <i class="icon"></i>
      </div>
      <div class="user_text">
        <p class="name">实名昵称</p>
        <span class="flag">基本信息</span>
      </div>
    </div>
    <div class="tabs">
      <div class="item" :class="{active: selected === item.label}"
           v-for="(item, index) in tabs"
           :key="index">
        <div class="item_text">
          <div class="text_title" @click="tabBtn(item)">
            <div class="title_l">
              <i class="icon" :class="item.icon"></i>
              <span class="">{{ item.name }}</span>
            </div>
            <i v-if="item.children" class="icon" :class="[item.isShow ? 'el-icon-arrow-up':'el-icon-arrow-down']"></i>
            <i v-else class="icon el-icon-arrow-right"></i>
          </div>
          <div class="text_item" v-if="item.children && item.isShow">
            <div class="item_child" :class="{active: selected === key.label}" v-for="key in item.children"
                 @click="tabBtn(key)">
              <span class="">{{ key.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sideBar',
  data() {
    return {
      selected: 'home',
      tabs: [
        {
          name: '首页',
          pathName: 'home',
          label: 'home',
          icon: 'el-icon-s-home'
        },
        {
          name: 'markDown',
          label: 'markDown',
          icon: 'el-icon-edit-outline'
        },
        {
          name: '文章(article)',
          label: 'article',
          icon: 'el-icon-reading',
          isShow: false,
        },
        {
          name: '组件(components)',
          label: 'components',
          icon: 'el-icon-s-grid',
          isShow: false,
          children: [
            {
              name: '图标(icon)',
              label: 'icon',
              icon: 'el-icon-s-release'
            },
            {
              name: '图表(echarts)',
              label: 'echarts',
              icon: 'el-icon-s-data'
            },
            {
              name: '上传(upload)',
              label: 'upload',
              icon: 'el-icon-s-promotion'
            },
            {
              name: '表格(table)',
              label: 'table',
              icon: 'el-icon-s-order'
            },
            {
              name: '富文本(edit)',
              label: 'edit',
              icon: 'el-icon-edit-outline'
            },

          ]
        },
        {
          name: '主题(theme)',
          label: 'theme',
          icon: 'el-icon-s-platform'
        },
        {
          name: '权限(valid)',
          label: 'valid',
          icon: 'el-icon-s-custom'
        },
        {
          name: '菜单管理(look)',
          label: 'look',
          icon: 'el-icon-s-tools'
        }
      ], // 侧边栏tab集合
      name: '',
    }
  },
  mounted() {
    this.selected = this.$route.name
  },
  methods: {
    tabBtn(item) {
      if (item.children) {
        item.isShow = !item.isShow
        return;
      }
      item.isShow === false && this.setOtherTabHide()
      if (this.$route.name === item.label) return
      this.selected = item.label
      this.$router.push(item.label)
    },
    // 设置其余tab的hide
    setOtherTabHide() {
      this.tabs.forEach(item => {
        item.isShow = false
      })
    }
  }
}
</script>

<style scoped lang="less">
.side_bar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  margin-top: 62px;
  display: block;
  z-index: 1000;
  color: #fff;
  font-weight: 200;
  background: var(--main-bg-color-default);
  box-shadow: 4px 4px 10px rgb(69 65 78 / 6%);
  overflow-y: scroll;

  .user {
    margin: 20px 20px;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8ECF3;

    .user_img {
      width: 42px;
      height: 42px;
      position: relative;
      margin-right: 6px;

      .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #999999;
      }

      .icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0px;
        bottom: 0px;
        background-size: 20px;
      }
    }

    .user_text {
      .name {
        font-size: 14px;
        font-weight: 600;
        color: #000;
        margin-bottom: 4px;
      }

      .flag {
        font-size: 12px;
        font-weight: 400;
        color: #999;
      }
    }
  }

  .tabs {
    position: relative;
    padding: 0 10px;

    .item {
      margin: 5px;
      text-align: left;
      font-size: 14px;
      cursor: pointer;
      color: #666666;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .item:hover {
      background: #e7f1ff;
    }

    .icon {
      color: #8d9498;
      margin-right: 10px;
      width: 25px;
      text-align: center;
      vertical-align: middle;
      float: left;
      font-size: 18px;
      line-height: 30px;
    }

    .item_text {
      display: flex;
      flex-direction: column;
      width: 100%;

      .text_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 0;
        margin-right: 5px;
        white-space: nowrap;
        padding: 10px 0;

        .title_l {
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
      }

      .text_item {
        background: #f7f7f7;

        .item_child {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 10px 0 10px 30px;
        }

      }
    }

    .item_child:hover {
      background: #eeeeee;
    }

    .active, .active:hover {
      background: #1572e8;
      color: #f7f9fa;
      font-weight: bold;

      .icon {
        color: #f7f9fa;
      }
    }
  }
}
</style>
