<template>
  <div class="homepage">homepage
    <el-button type="primary">阿萨德</el-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
    components: {}
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
  }
</script>

<style scoped lang="scss">
  .homepage {
    background-color: red;
  }
</style>
