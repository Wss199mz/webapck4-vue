<template>
  <div class="productModules">
    <ul>
      <li>
        <div class="modulesitem">
          <img src="../../assets/img/item1.png" alt="">
          <p>总体实力</p>
        </div>
        <div class="module-txt">
          <div>
            <p class="num">85.2亿</p>
            <p>2018年业务量达到85.2亿</p>
          </div>
        </div>
      </li>
      <li>
        <div class="modulesitem">
          <img src="../../assets/img/item3.png" alt="">
          <p>覆盖面</p>
        </div>
        <div class="module-txt">
          <div>
            <p class="num">30,100</p>
            <p>支持网点</p>
          </div>
          <div>
            <p class="num">98.32%</p>
            <p>覆盖区县</p>
          </div>
          <div>
            <p class="num">30万+</p>
            <p>服务中通人</p>
          </div>
        </div>
      </li>
      <li>
        <div class="modulesitem">
          <img src="../../assets/img/item2.png" alt="">
          <p>运输环节</p>
        </div>
        <div class="module-txt">
          <div>
            <p class="num">87</p>
            <p>分拣中心</p>
          </div>
          <div>
            <p class="num">5,550+</p>
            <p>干线车辆</p>
          </div>
          <div>
            <p class="num">2,220+</p>
            <p>干线线路</p>
          </div>
        </div>
      </li>
      <li>
        <div class="modulesitem">
          <img src="../../assets/img/item4.png" alt="">
          <p>研发能力</p>
        </div>
        <div class="module-txt">
          <div>
            <p class="num">1,100</p>
            <p>研发团队</p>
          </div>
          <div>
            <p class="num">1111</p>
            <p>研发投入</p>
          </div>
          <div>
            <p class="num">3PB</p>
            <p>大数据存储</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
    name: 'productModules',
    components: {}
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
  }
</script>

<style scoped lang="scss">
  .productModules {
    ul {
      font-size: 0px;
      li {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        background:rgba(24,29,32,1);
        text-align: center;
        padding: 128px 0;
        transition: all .5s ease;
        &:nth-child(1), &:nth-child(4) {
          background:rgba(37,41,45,1);
        }
        &:hover {
          & {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
          &:nth-child(1) {
            background-image: url('../../assets/img/banner-item1.png');
          }
          &:nth-child(2) {
            background-image: url('../../assets/img/banner-item2.png');
          }
          &:nth-child(3) {
            background-image: url('../../assets/img/banner-item3.png');
          }
          &:nth-child(4) {
            background-image: url('../../assets/img/banner-item4.png');
          }
          .modulesitem {
            transform: translateY(-60%);
          }
          .module-txt {
            transform: translateY(120%);
            opacity: 1;
          }
        }
        .modulesitem {
          transition: all .5s ease;
          img {
            display: inline-block;
            height: 90px;
          }
          p {
            padding-top: 22px;
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
          }
        }
        .module-txt {
          transition: all .5s ease;
          transform: translateY(50%);
          opacity: 0;
          display: flex;
          justify-content: space-around;
          p {
            font-size:16px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
          }
          p.num {
            font-size:30px;
            font-family:DINCond-Regular;
            font-weight:400;
            color:rgba(0,172,246,1);
            padding-bottom: 20px;
          }
        }
      }
    }
  }
</style>
