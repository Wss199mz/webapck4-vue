<template>
  <div class="nav-bar">
    <div class="logo">
      <Icon class="icon down-icon" name="logo.png" width="145px" height="25px"></Icon>
    </div>
    <ul class="nav-list">
      <li v-for="(item, index) in navList" :key="index">{{item}}</li>
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
        display: inline-block;
        vertical-align: middle;
        font-family:PingFang SC;
        font-size:14px;
        font-weight:400;
        color:#A4A4A4;
        margin-right: 60px;
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
</style>
