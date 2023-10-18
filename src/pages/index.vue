<template>
  <DefaultLayout>
  <div class=" py-40 text-center from-[#a18cd1] to-[#fbc2eb] bg-gradient-to-t">
    <h1 class=" inline-block mix-blend-screen text-black bg-white font-bold text-3xl p-3">Imgur Manager</h1>
  </div>
  <div>
    <button type="button" @click="doFetch">哈哈</button>
  </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/default.vue'
</script>