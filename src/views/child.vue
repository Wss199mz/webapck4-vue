<template>
  <div class="homepage-content">
    <div class="nav">
      <ZtoNav />
    </div>
    <div class="content">
      <div class="homepage" :style="{ transform: `translateY(${translateY})` }">
        homepage
        <el-button type="primary">阿萨德</el-button>
        <div @click="down" class="down">
          <Icon class="icon down-icon" name="down.png" width="21px" height="34px"></Icon>
          <Icon class="icon down-direction1" name="down1.png" width="15px" height="9px"></Icon>
          <Icon class="icon down-direction2" name="down2.png" width="15px" height="9px"></Icon>
        </div>
        <div class="mask"></div>
        <div class="nextPage" :style="{ height: height }">
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
          <div>第二页第二页第二页</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { util } from '../utils/index'
  import {Component, Vue, Prop} from 'vue-property-decorator'
  import ZtoNav from '../components/nav/'

  @Component({
    components: {
      ZtoNav
    }
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
    translateY: any = 0
    direction: string = ''
    isDown: boolean = false
    height: string = '0px'
    mounted() {
      window.addEventListener('mousewheel',this.handleScroll,false)
    }
    down() {
      this.translateY = '-100%'
      this.height = '1000px'
    }
    up() {
      this.translateY = 0
      this.height = '0px'
    }
    handleScroll (e: any) {
      if (!this.isDown && e.deltaY > 20 && this.height === '0px') {
        this.direction = 'up'
        util.throttle(this.addResizeNum, 100)
      } else if (!this.isDown && e.deltaY < -20 && this.height === '1000px') {
        this.direction = 'down'
        util.throttle(this.addResizeNum, 100)
      }
    }
    addResizeNum () {
      if (this.isDown) {
        return false
      }
      this.isDown = true
      if (this.direction === 'up') {
        this.down()
      } else {
        this.up()
      }
      setTimeout(() => {
        this.isDown = false
      }, 1000)
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
          bottom: 10%;
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
