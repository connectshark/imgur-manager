<template>
<header class="border-b border-gray-300">
  <div class=" w-11/12 mx-auto flex items-center justify-between py-4">
    <router-link to="/">
      <img class=" w-8" src="../assets/logo.jpg" alt="logo">
    </router-link>
    <ul class=" flex items-center gap-3">
      <li>
        <router-link class=" hover:underline" to="/album">相簿</router-link>
      </li>
      <li>
        <router-link class=" hover:underline" to="/image">照片</router-link>
      </li>
      <li>
        <router-link class=" hover:underline" to="/upload">上傳</router-link>
      </li>
      <li v-if="!store.isLogin">
        <router-link class=" hover:underline" to="/login">登入</router-link>
      </li>
    </ul>
  </div>
</header>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const store = useUserStore()
</script>