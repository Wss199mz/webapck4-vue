<template>
  <div class="nav-bar">
    <div class="logo">
      <Icon class="icon down-icon" name="logo.png" width="145px" height="25px"></Icon>
    </div>
    <ul class="nav-list">
      <li v-for="(item, index) in navList" :key="index" @click="choseNavItem(index)">
        <span :class="{ txt: true, actives: active === index }">{{item}}</span>
        <span :class="{ active: active === index }"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
    name: 'ZtoNav',
    components: {}
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
    navList: any = ['首页', '产品', '综合实力', '关于我们', '新闻动态']
    active: number = 0
    choseNavItem (index: any) {
      this.active = index
    }
  }
</script>

<style scoped lang="scss">
  .nav-bar {
    text-align: center;
    padding: 28px;
    min-width: 1000px;
    .logo {
      margin-right: 116px;
    }
    .logo, .nav-list {
      display: inline-block;
      vertical-align: middle;
    }
    ul.nav-list {
      li {
        position: relative;
        width: 50px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
        font-family: PingFang SC;
        font-size: 14px;
        font-weight: 400;
        color: #A4A4A4;
        margin-right: 80px;
        padding: 0 10px;
        cursor: pointer;
        .txt {
          position: absolute;
          z-index: 1;
          width: 60px;
          top: 4px;
          left: 50%;
          transition: all .5s;
          &.actives {
            color: #fff;
          }
        }
        .active {
          transition: all .5s;
          position: absolute;
          display: inline-block;
          bottom: -4px;
          width: 52px;
          height: 10px;
          background: #00acf6;
          border-radius: 5px;
          left: 29px;
        }
      }
    }
  }
</style>
