<script setup lang="ts">
import VueSrc from './assets/vue.svg'
</script>

<template>
  <div style="width: 100%; height: 100%">
    <img :src="VueSrc" />
    <div style="display: flex;align-items: center;gap: 20px">
      <router-link to="/a">page A</router-link>
      <router-link to="/b">page B</router-link>
    </div>
    <router-view />
  </div>
</template>
