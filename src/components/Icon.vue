<template>
  <div class="icon-template" :style="{ height: height, lineHeight: height }">
    <img :src="fullName" alt="" v-if="fullName" :style="{ width: width, height: height }">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Icon'
})
export default class Icon extends Vue {
  @Prop({ default: 'qita' })
  name!: string;
  @Prop({ default: 'auto' })
  width!: any;
  @Prop({ default: 'auto' })
  height!: any;
  get fullName() {
    return require(`../assets/icons/svg/${this.name}`);
  }
}
</script>

<style scoped lang="scss">
  .icon-template {
    text-align: center;
    ._icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>
