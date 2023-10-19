<template>
<DefaultLayout>
<div class="mx-auto w-11/12">
  <h2 class=" text-2xl/loose">照片牆</h2>
  <div v-if="loading" class=" text-center">
    <i class='bx bx-loader bx-spin' ></i>
  </div>
  <ul v-else>
    <li class=" inline-block align-middle" v-for="img in result.data" :key="img.id">
      <router-link :to="`/image/${ img.id }`">
        <img loading="lazy" :src="`https://i.imgur.com/${ img.id }s.png`" alt="縮圖">
      </router-link>
    </li>
  </ul>
</div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import useFetch from '../../composables/useFetch'

const {
  loading,
  result
} = useFetch(`/image`)

</script>