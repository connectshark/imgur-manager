<template>
<FullscreenLayout>
  <div class=" text-center bg-white p-5">
    <h1>loading...</h1>
    <p>
      <router-link replace class=" text-xs underline" to="/">回首頁</router-link>
    </p>
  </div>
</FullscreenLayout>
</template>

<script setup>
import FullscreenLayout from '../layouts/fullscreen.vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const route = useRoute()
const store = useUserStore()
store.token = route.query.access_token || ''

const router = useRouter()
router.replace('/')
</script>