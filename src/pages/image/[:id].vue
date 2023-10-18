<template>
<DefaultLayout>
<div class="mx-auto w-11/12">
  <h2 class=" text-2xl/loose">照片詳情 {{ route.params.id }}</h2>
  <section v-if="result">
    <figure>
      <img :src="result.link" alt="照片">
    </figure>
    <div>
      <button @click="deleteImage(result.deletehash)" class=" text-primary hover:underline" type="button">刪除</button>
    </div>
  </section>
</div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import { useImages } from '../../composables/fetch-core'

const route = useRoute()

const {
  getTargetImage,
  loading,
  result,
  deleteImage
} = useImages()

getTargetImage(route.params.id)
</script>