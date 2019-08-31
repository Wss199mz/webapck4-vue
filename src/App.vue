<template>
  <div>
    <h3 class="title">{{title}}</h3>
    <p class="content">{{content}}</p>
    <div class="goddess">
      <div class="right">
        <h4 class="right__h4">background引入图片</h4>
        <div class="right__img"></div>
      </div>
      <div class="left">
        <h4 class="left__h4"></h4>
        <img class="left__img" src="./assets/img/mountain.jpg" />
      </div>
      <div @click="onpageshow">asdf</div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    components: {
    },
    data () {
      return {
        title: 'hello word',
        content: 'webpack4 搭建vue环境',
      }
    },
    methods: {
      onpageshow() {
        alert(1123)
      }
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
