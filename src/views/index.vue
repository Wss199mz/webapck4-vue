<template>
  <router-view class="child-view"/>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator';

  @Component({
    name: 'home-page',
    components: {}
  })
  export default class Home extends Vue {
    private data() {
      return {};
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

<style scoped lang="scss">
  .child-view {
    transition: all 1s ease-in;
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
    /*opacity: 0*/
  }
</style>
