<script lang="ts" setup>
const picture1 = new URL('/static/images/databases/clickhouse.png', import.meta.url).href
const picture2 = new URL('/static/svg/analytics/bg.svg', import.meta.url).href
</script>

<template>
    <div>
        <img :src="picture1" />
        <img :src="picture2" />
        <div class="bg">
            background-image
        </div>
    </div>
</template>

<style scoped>
img {margin-top: 10px;}
.bg {
    margin-top: 20px;
    border: 1px solid red;
    width: 300px;
    height: 300px;
    background: url('/static/svgs/home/rect.svg') no-repeat 100%;
}
</style>