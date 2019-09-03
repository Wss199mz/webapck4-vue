<template>
  <div class="homepage-content">
    <div class="nav">
      <span style="color: #fff">{{bodyPosition}}</span>
      <ZtoNav />
    </div>
    <div class="content">
      <div class="homepage" :style="{ transform: `translateY(${translateY})` }">
        <video src="http://chimee.org/vod/1.mp4" loop="loop" autoplay="autoplay" muted="muted" class="bgVideo"></video>
        <div @click="down" class="down" id="down">
          <Icon class="icon down-icon" name="down.png" width="21px" height="34px"></Icon>
          <Icon class="icon down-direction1" name="down1.png" width="15px" height="9px"></Icon>
          <Icon class="icon down-direction2" name="down2.png" width="15px" height="9px"></Icon>
        </div>
        <div class="mask"></div>
        <div class="nextPage" :style="{ height: `${height}px` }">
          <NextPage :initIndex="initIndex" ref="nextPages"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { util } from '../utils/index'
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
  import ZtoNav from '../components/nav/'
  import NextPage from './nextPage'
  import AppStore from '../store/modules/app'
  @Component({
    components: {
      ZtoNav,
      NextPage
    }
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
    translateY: any = 0
    direction: string = ''
    isDown: boolean = false
    height: number = 0
    isFirst: boolean = true
    initIndex: boolean = false
    $refs: any
    mounted() {
      window.addEventListener('mousewheel',this.handleScroll,false)
    }
    private get bodyPosition () {
      return AppStore.bodyPosition
    }
    down() {
      this.translateY = '-100%'
      this.height = this.$refs.nextPages.$el.clientHeight
      this.initIndex = !this.initIndex
    }
    up() {
      this.translateY = 0
      this.height = 0
      this.isFirst = true
    }
    handleScroll (e: any) {
      if (this.bodyPosition === 'fixed') { // 有蒙层时禁止滚动页面
        return false
      }
      let scrollTop = document.documentElement!.scrollTop
      if (!this.isDown && e.deltaY > 20 && this.height === 0) { // 向下滚动
        this.direction = 'up'
        util.throttle(this.addResizeNum, 100)
      } else if (!this.isDown && e.deltaY < -20 && this.height !== 0 && scrollTop === 0) { // 向上滚动
        if (this.isFirst) {
          setTimeout(() => {
            this.isFirst = false
          }, 100)
          return false
        }
        this.direction = 'down'
        util.throttle(this.addResizeNum, 100)
      } else if (scrollTop > 0 && this.direction === 'up' && !this.isFirst) { // 取消第一次向上滚动
        this.isFirst = true
      }
    }
    addResizeNum () {
      if (this.isDown) { // 滚动中停止执行
        return false
      }
      this.isDown = true
      this.direction === 'up' ? this.down() : this.up()
      setTimeout(() => {
        this.isDown = false
      }, 1000)
    }
    @Watch('bodyPosition', { immediate: false, deep: true })
    position() {
      if (this.bodyPosition === 'fixed') {
        document.body.style.position = "fixed";
        document.body.style.top = 0 + "px";
      } else {
        document.body.style.position = "";
        document.body.style.top = "";
      }
    }
  }
</script>

<style scoped lang="scss">
  .homepage-content {
    .nav {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 100;
      background:rgba(0,0,0,1);
    }
    .content {
      .homepage {
        position: relative;
        padding-top: 80px;
        height: calc(100vh - 80px);
        width: 100%;
        transition: all .7s;
        .bgVideo {
          width: 100%;
          height:calc(100vh - 83px);
          object-fit:fill;
        }
        .mask {
          position: absolute;
          top: 0;
          height: 100vh;
          background: #000;
          opacity: .4;
          width: 100%;
        }
        .down {
          position: absolute;
          bottom: -18px;
          left: 50%;
          height: 40px;
          cursor: pointer;
          z-index: 1;
          .down-icon {
            position: absolute;
            top: 0;
            left: 0;
            animation: downMove 1.5s;
            transform: translateX(0px);
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          .down-direction1 {
            position: absolute;
            top: 36px;
            left: 4px;
            animation: mymove1 1.5s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          .down-direction2 {
            position: absolute;
            top: 44px;
            left: 4px;
            animation: mymove2 1.5s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          @keyframes downMove
          {
            0% {
              opacity: 1;
            }
            30% {
              opacity: 0.6;
            }
            50% {
              opacity: 0.2;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes mymove1
          {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            30% {
              transform: translateY(40%);
              opacity: 0.6;
            }
            50% {
              transform: translateY(80%);
              opacity: 0.2;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes mymove2
          {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            30% {
              transform: translateY(40%);
              opacity: 0.6;
            }
            50% {
              transform: translateY(80%);
              opacity: 0.2;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
        .nextPage {
          position: absolute;
          bottom: -80px;
          width: 100%;
          overflow: hidden;
          transition: all .7s;
          transform: translateY(100%);
        }
      }
    }
  }
</style>
