<script lang="ts" setup>
import {createUrl} from "@app/shared/utils";

const picture1 = createUrl('/static/images/databases/AntDB.png')
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
  width: 100px;
  height: 100px;
  background: url('/static/images/databases/CASSANDRA.png') no-repeat 100%;
}
</style>
