<script lang="ts" setup>
const picture1 = new URL('/static/images/databases/AntDB.png', import.meta.url).href
const picture2 = new URL('/static/svgs/analytics/bg.svg', import.meta.url).href
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
    width: 100px;
    height: 100px;
    background: url('/static/images/databases/CASSANDRA.png') no-repeat 100%;
}
</style>