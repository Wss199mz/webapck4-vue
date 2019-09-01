<template>
  <div>
    <img :src="fullName" alt="" v-if="fullName">
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
  get fullName() {
    return require(`../assets/icons/svg/${this.name}`);
  }
}
</script>

<style scoped lang="scss">
._icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
