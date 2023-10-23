<template>
<FullscreenLayout>
  <section class="text-center bg-white p-5 px-20">
    <div class="mb-4">
      <router-link to="/">
        <img class="w-8 inline-block" src="../assets/logo.jpg" alt="logo">
      </router-link>
    </div>
    <h2 class="text-2xl/loose mb-10">無此頁</h2>
    <p class=" text-center">
      <router-link to="/" class=" underline">回首頁</router-link>
    </p>
  </section>
</FullscreenLayout>
</template>
<script setup>
import FullscreenLayout from '../layouts/fullscreen.vue'
import { definePage } from 'vue-router/auto'
definePage({
  name: 'notFound',
  meta: {
    title: '無頁面'
  }
})
</script>