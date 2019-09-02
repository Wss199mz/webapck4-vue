<template>
  <transition :name="transitionName">
    <router-view class="child-view"/>
  </transition>
</template>

<script lang="ts">
  declare const window: any
  import { Component, Vue, Watch } from 'vue-property-decorator';
  @Component({
    name: 'App'
  })
  export default class App extends Vue {
    mounted() {
      window.resizeTo = 123
    }
    transitionName: string = ''
    historyList: any = []
    @Watch('$route', { immediate: false, deep: true })
    readOnlyModeChange(oldRoute: any, newRoute: any) {
      if (window.history.state) {// 无state时，无动画，不缓存
        this.historyList.push(window.history.state)
        if (this.historyList.length <= 1) {
          this.transitionName = ''
          return
        }
      }
      if (oldRoute.path === '/HomePage' && newRoute.path === '/test') {
        this.transitionName = 'slide-right'
      } else if (oldRoute.path === '/test' && newRoute.path === '/HomePage') {
        this.transitionName = 'slide-left'
      }
    }
  }
</script>


<style lang="scss" scoped>
  .child-view {
    transition: all 0.2s ease;
  }

  .slide-left-enter, .slide-right-leave-active {
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
  }
  
  .slide-left-leave-active, .slide-right-enter {
    -webkit-transform: translate(0, -100%);
    transform: translate(0, -100%);
  }
  
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  
  .title {
    font-size: 20px;
    text-align: center;
    color: red;
  }
  .content {
    font-size: 14px;
    color: #333333;
  }
  .goddess {
    
    .left {
      margin-left: 50%;
      &__h4 {
        font-size: 14px;
      }
      &__img {
        width: 308px;
        height: 433px;
      }
    }
    .right {
      float: left;
      &__h4 {
        font-size: 14px;
      }
      &__img {
        width: 300px;
        height: 150px;
        background: url('./assets/img/mountain.jpg') no-repeat;
      }
    }
  }
</style>
