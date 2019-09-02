<template>
  <div class="test">test</div>
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
  .test {
    height: 100%;
    background-color: aquamarine;
  }
</style>
