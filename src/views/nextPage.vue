<template>
  <div>
    <el-carousel trigger="click" height="150px" v-if="isShowCarousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/img/banner-loop1.png" alt="" />
      </el-carousel-item>
    </el-carousel>
    
    <div class="video-profile">
      <div class="video" @click="openMask">
        <img src="../assets/img/company-profile.png" alt="" />
        <img src="../assets/img/paly.png" class="play" alt="" />
        <p class="company-video">企业介绍视频</p>
      </div>
      <div :class="{ profileTxt: true, active: profileTxtActive }" ref="profileTxt">
        <p class="company">
          <img src="../assets/img/CompanyProfile.png" alt="" />
        </p>
        <div class="com">企业简介</div>
        <div class="line"></div>
        <p class="tit">
          <img src="../assets/img/product.png" alt="" />
        </p>
        <div class="txt">中通科技是中通快递旗下的一支千余人规模的研发团队。秉承“互联网+物流”的理念，中通科技与公司战略、业务紧密衔接，先后自主研发出近百个软件系统和数字化工具，赋能覆盖快递业务全场景，同时为快运、国际、云仓、优选、金融等生态圈业务提供全方位的研发支持。</div>
        <div class="more">
          <span class="txt">查看更多</span>
          <span class="mask"></span>
        </div>
      </div>
    </div>
    
    <div v-if="isShowMask" style="width:100%;height: 100%;overflow: hidden" @touchmove.prevent>
      <div class="mask-video">
        <div class="play-video">
          <div class="close" @click="closeVideo"></div>
          <video src="http://chimee.org/vod/1.mp4" controls="controls" controlslist="nodownload"></video>
        </div>
      </div>
    </div>
    <ProductModules />
    <Particles />
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
  import ProductModules from './components/productModules'
  import Particles from './components/particles'
  import { util } from '../utils/index'

  @Component({
    components: {
      ProductModules,
      Particles
    }
  })
  export default class Home extends Vue {
    @Prop({
      default: false
    })
    initIndex!: boolean
    isShowCarousel: boolean = true
    isShowMask: boolean = false
    profileTxtActive: boolean = false
    $refs: any
    private data() {
      return {};
    }
    mounted () {
      window.addEventListener('scroll', this.updateAnimate);
    }
    updateAnimate () {
      this.profileTxtActive = util.eleScrollTop(document.documentElement, this.$refs.profileTxt)
    }
    openMask () {
      this.isShowMask = true
      this.$store.commit('BODY_POSITION', 'fixed')
    }
    closeVideo () {
      this.isShowMask = false
      this.$store.commit('BODY_POSITION', '')
    }
    @Watch('initIndex', { immediate: false, deep: true })
    initItem(oldRoute: any, newRoute: any) {
      this.isShowCarousel = false
      this.profileTxtActive = false
      this.$nextTick(() => {
        this.isShowCarousel = this.profileTxtActive = true
      })
    }
  }
</script>

<style scoped lang="scss">
  .video-profile {
    position: relative;
    padding: 120px 0;
    text-align: center;
    background:rgba(22,25,27,1);
    min-width: 1384px;
    .video {
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin-right: 80px;
      border: 1px solid rgba(0,172,246,1);
      transform: translate(10px, 10px);
      cursor: pointer;
      img:first-child {
        width: 630px;
        transform: translate(-10px, -10px);
      }
      img.play {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 85px;
        transform: translate(-50%, -50%);
      }
      .company-video {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size:22px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
    }
    .profileTxt {
      display: inline-block;
      vertical-align: top;
      margin-left: 80px;
      padding-top: 10px;
      text-align: left;
      &.active {
        .company, .com, div.line, .tit, .tit, .txt, .more {
          transform: translateY(0);
          opacity: 1;
        }
      }
      .company {
        transition: all 2s ease;
        color: #C9D1D7;
        transform: translateY(80px);
        opacity: 0;
      }
      .com {
        transition: all 2s ease;
        font-size:22px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin: 12px 0 32px 0;
        transform: translateY(80px);
        opacity: 0;
      }
      div.line {
        transition: all 2s ease;
        width:55px;
        height:3px;
        background:rgba(0,172,246,1);
        border: 1px transparent;
        border-radius:3px;
        margin-bottom: 46px;
        transform: translateY(80px);
        opacity: 0;
      }
      .tit {
        transition: all 2s ease;
        font-size:22px;
        font-family:DFPYaSongW9-GB;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-bottom: 32px;
        transform: translateY(80px);
        opacity: 0;
      }
      .txt {
        transition: all 2s ease;
        width: 580px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(129,139,146,1);
        padding-bottom: 40px;
        line-height: 24px;
        transform: translateY(80px);
        opacity: 0;
      }
      .more {
        transition: all 2s ease;
        position: relative;
        cursor: pointer;
        transform: translateY(80px);
        opacity: 0;
        .txt {
          position: absolute;
          z-index: 1;
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          padding: 0;
          width: 70px;
        }
        &:hover {
          color: red;
          .mask {
            width: 80px;
          }
        }
        .mask {
          position: absolute;
          display: inline-block;
          top: 7px;
          left: -10px;
          height:18px;
          width: 34px;
          background:rgba(0,172,246,1);
          border-radius:9px;
          transition: all .4s;
        }
      }
    }
  }
  .mask-video {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10001;
    background-color: rgba(0, 0, 0, .6);
  }
  .play-video {
    position: absolute;
    top: 40vh;
    left: 50%;
    z-index: 10002;
    transform: translate(-50%, -50%);
    .close {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 0;
      top: 6px;
      cursor: pointer;
      transform: translateX(100%);
      background-color: rgb(29, 28, 26);
      background-image: url('../assets/icons/svg/close.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 30px;
    }
    video {
      width: 1024px;
      height: 576px;
      border: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-modify: read-write-plaintext-only;
      outline: none;
    }
  }
  /deep/ {
    .el-carousel--horizontal {
      overflow-x: visible;
    }
    .el-carousel__container {
      height: 420px !important;
    }
  }
</style>
