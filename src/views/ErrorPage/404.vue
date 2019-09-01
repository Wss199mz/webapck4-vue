<template>
  <div class="error-404">
    <Icon class="icon" name="404.svg"></Icon>
    <h1>您的页面走丢了~~</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import Icon from '@/components/Icon.vue';
@Component({
  name: 'Error404',
  components: {}
})
export default class Error404 extends Vue {}
</script>

<style scoped lang="scss">
.error-404 {
  padding-top: 80px;
  text-align: center;
  .icon {
    padding-bottom: 20px;
    font-size: 150px;
  }
}
</style>
