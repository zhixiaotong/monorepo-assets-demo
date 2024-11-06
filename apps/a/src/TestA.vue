<script lang="ts" setup>
import {createUrl} from "@app/shared/utils";
const picture1 = createUrl('/static/assets-a/DB2.png')
const picture2 = createUrl('/static/svgs/analytics/bg.svg')
</script>

<template>
  <div>
    <img :src="picture1"/>
    <img :src="picture2"/>
    <div class="bg">
      background-image
    </div>
  </div>
</template>

<style scoped>
img {
  margin-top: 10px;
}

.bg {
  margin-top: 20px;
  border: 1px solid red;
  width: 300px;
  height: 300px;
  background: url('/static/svgs/home/rect.svg') no-repeat 100%;
}
</style>
