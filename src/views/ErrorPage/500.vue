<template>
  <div class="error-500">
    <Icon class="icon" name="bug.svg"></Icon>
    <h1>sorry~~，服务端异常，请联系管理员~~</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
@Component({
  name: 'Error500',
  components: {}
})
export default class Error500 extends Vue {}
</script>

<style scoped lang="scss">
.error-500 {
  padding-top: 80px;
  text-align: center;
  .icon {
    padding-bottom: 20px;
    font-size: 150px;
  }
}
</style>
