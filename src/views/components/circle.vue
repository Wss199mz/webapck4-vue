<template>
  <div class="circle-template" :style="{ width: `${width}px`, height: `${width}px`, background: bgColor }">
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component({
    name: 'CircleTemplate',
    components: {}
  })
  export default class Home extends Vue {
    @Prop({
      default: 100
    })
    width!: number
    @Prop({
      default: 'rgba(0,0,0,.4)'
    })
    bgColor!: string
    private data() {
      return {};
    }
  }
</script>

<style lang="scss">
  .circle-template {
    border-radius: 50%;
    border: 6px transparent;
    text-align: center;
    opacity: .4;
  }
</style>
