<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
    name: 'home-page',
    components: {}
  })
  export default class Home extends Vue {
    private data() {
      return {};
    }
  }
</script>

<style scoped lang="scss">
</style>
