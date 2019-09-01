<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
  declare const window: any
  import { Component, Vue } from 'vue-property-decorator';
  @Component({
    name: 'App'
  })
  export default class App extends Vue {
    mounted() {
      window.resizeTo = 123
    }
  }
</script>


<style lang="scss" scoped>
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
