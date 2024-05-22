<template>
<DefaultLayout>
<div class="mx-auto w-11/12">
  <h2 class=" text-2xl/loose">照片牆</h2>
  <div v-if="loading" class=" text-center">
    <i class='bx bx-loader bx-spin' ></i>
  </div>
  <div v-else-if="error">
    <p>發生錯誤: {{ error }}</p>
  </div>
  <div class=" text-center" v-else-if="result.data.length <= 0">
    <p>無相片</p>
  </div>
  <div v-else>
    <div class=" text-center space-x-4 mb-10">
      <button @click="page--" class=" bg-primary text-white rounded-md" v-if="page !== 0" type="button">
        <i class='bx bxs-chevron-left align-middle bx-sm'></i>
      </button>
      <span class=" font-bold text-xl">{{ page + 1 }}</span>
      <button v-if="result.data.length >= 100" @click="page++" class=" bg-primary text-white rounded-md" type="button">
        <i class='bx bxs-chevron-right align-middle bx-sm'></i>
      </button>
    </div>
    <ul>
      <li class=" inline-block align-middle" v-for="img in result.data" :key="img.id">
        <router-link :to="`/image/${ img.id }`">
          <img loading="lazy" :src="`https://i.imgur.com/${ img.id }s.${ img.type.split('/')[1] }`" alt="縮圖">
        </router-link>
      </li>
    </ul>
  </div>
</div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import useFetch from '../../composables/useFetch'
import { ref, watchEffect } from 'vue'

const {
  loading,
  result,
  error,
  doFetch: fetchImages
} = useFetch(`/image`, {
  immediate: false
})

const page = ref(0)

watchEffect(() => {
  fetchImages({ page: page.value })
})

</script>