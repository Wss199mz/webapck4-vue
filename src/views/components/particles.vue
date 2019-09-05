<template>
  <div class="particles">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="160"
      shapeType="circle"
      :particleSize="4"
      linesColor="#82b2d5"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false">
    </vue-particles>
    <div class="manage">
      <CircleTemplate :width="106" bgColor="rgba(71,178,208,1)"/>
      <span class="txt-module">管理</span>
    </div>
    <div class="terminal">
      <CircleTemplate :width="106" bgColor="rgba(59,126,237,1)"/>
      <span class="txt-module">末端</span>
    </div>
    <div class="logo">
      <CircleTemplate :width="168" bgColor="rgba(71,178,208,1)"/>
      <img src="../../assets/img/title-log.png" alt="" />
    </div>
    <div class="enabling">
      <CircleTemplate :width="106" bgColor="rgba(71,178,208,1)"/>
      <span class="txt-module">赋能生态</span>
    </div>
    <div class="transport">
      <CircleTemplate :width="106" bgColor="rgba(59,126,237,1)"/>
      <span class="txt-module">转运中心</span>
    </div>
    <div class="tran-new">
      <CircleTemplate :width="106" bgColor="rgba(59,126,237,1)"/>
      <span class="txt-module">运输</span>
    </div>
    <div class="market">
      <CircleTemplate :width="106" bgColor="rgba(71,178,208,1)"/>
      <span class="txt-module">营销</span>
    </div>
    <div class="customer">
      <CircleTemplate :width="106" bgColor="rgba(71,178,208,1)"/>
      <span class="txt-module">客服</span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import CircleTemplate from './circle'

  @Component({
    components: {
      CircleTemplate
    }
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
  }
</script>

<style scoped lang="scss">
  .particles {
    position: relative;
    height: 700px;
    background-image: url('../../assets/img/partic-star.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .txt-module {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      font-size: 20px;
      display: inline-block;
      width: 100%;
      transform: translate(-50%, -50%);
    }
    .manage {
      top: 210px;
      left: 134px;
      width: 116px;
      height: 116px;
      border: 1px solid #47B2D0;
      animation: manageMove 6s 1s ease-in-out infinite;
    }
    .terminal {
      top: 80px;
      left: 334px;
      width: 116px;
      height: 116px;
      border: 1px solid #3B7EED;
      animation: terminalMove 4s 2s ease-in-out infinite;
    }
    .tran-new {
      bottom: 80px;
      left: 234px;
      width: 116px;
      height: 116px;
      border: 1px solid #3B7EED;
      animation: trannewMove 4s 2s ease-in-out infinite;
    }
    .market {
      bottom: 210px;
      left: 65%;
      width: 116px;
      height: 116px;
      border: 1px solid #47B2D0;
      animation: marketMove 6s 1s ease-in-out infinite;
    }
    .customer {
      bottom: 120px;
      right: 80px;
      width: 116px;
      height: 116px;
      border: 1px solid #47B2D0;
      animation: customerMove 5s 1s ease-in-out infinite;
    }
    .transport{
      top: 80px;
      right: 134px;
      width: 116px;
      height: 116px;
      border: 1px solid #3B7EED;
      animation: transportMove 4s 2s ease-in-out infinite;
    }
    .enabling {
      top: 210px;
      right: 334px;
      width: 116px;
      height: 116px;
      border: 1px solid #47B2D0;
      animation: enablingMove 4s 2s ease-in-out infinite;
    }
    .logo {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 178px;
      height: 178px;
      border: 1px solid #47B2D0;
      animation: logoMove 4s 2s ease-in-out infinite;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .manage, .terminal, .logo, .enabling, .transport, .tran-new, .market, .customer {
      position: absolute;
      cursor: pointer;
      border-radius: 50%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        .circle-template {
          opacity: .6;
        }
        animation-play-state:paused;
      }
    }
    @keyframes marketMove {
      0% {
        bottom: 130px;
        left: 65%;
        transform: translateX(0);
      }
      50% {
        bottom: 180px;
        left: 55%;
        transform: translateX(40px);
      }
      100% {
        bottom: 130px;
        left: 65%;
        transform: translateX(0);
      }
    }
    @keyframes customerMove {
      0% {
        bottom: 120px;
        right: 80px;
        transform: translateX(0);
      }
      50% {
        bottom: 160px;
        right: 110px;
        transform: translateX(40px);
      }
      100% {
        bottom: 120px;
        right: 80px;
        transform: translateX(0);
      }
    }
    @keyframes manageMove
    {
      0% {
        top: 210px;
        left: 134px;
        transform: translateX(0);
      }
      50% {
        top: 310px;
        left: 190px;
        transform: translateX(40px);
      }
      100% {
        top: 210px;
        left: 134px;
        transform: translateX(0);
      }
    }
    @keyframes terminalMove
    {
      0% {
        top: 80px;
        left: 334px;
        transform: translateX(0);
      }
      50% {
        top: 140px;
        left: 334px;
        transform: translateX(40px);
      }
      100% {
        top: 80px;
        left: 334px;
        transform: translateX(0);
      }
    }
    @keyframes trannewMove {
      0% {
        bottom: 80px;
        left: 234px;
        transform: translateX(0);
      }
      50% {
        bottom: 130px;
        left: 280px;
        transform: translateX(40px);
      }
      100% {
        bottom: 80px;
        left: 234px;
        transform: translateX(0);
      }
    }
    @keyframes transportMove
    {
      0% {
        top: 80px;
        right: 134px;
        transform: translateX(0);
      }
      50% {
        top: 140px;
        right: 190px;
        transform: translateX(40px);
      }
      100% {
        top: 80px;
        right: 134px;
        transform: translateX(0);
      }
    }
    @keyframes logoMove
    {
      0% {
        top: 30%;
      }
      50% {
        top: 40%;
      }
      100% {
        top: 30%;
      }
    }
    @keyframes enablingMove
    {
      0% {
        top: 210px;
        right: 334px;
        transform: translateX(0);
      }
      50% {
        top: 280px;
        right: 334px;
        transform: translateX(-20px);
      }
      100% {
        top: 210px;
        right: 334px;
        transform: translateX(0);
      }
    }
  }
</style>
