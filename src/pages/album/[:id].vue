<template>
<DefaultLayout>
  <div class="mx-auto w-11/12">
    <div>ALBUM {{ albumID }}</div>
    <div v-if="loading" class=" text-center">
      <i class='bx bx-loader bx-spin' ></i>
    </div>
    <ul v-else class="grid grid-cols-2 gap-2">
      <li v-for="img in result.data" :key="img.id">
      <router-link :to="`/image/${ img.id }`">
          <img loading="lazy" :src="img.link" alt="image">
        </router-link>
      </li>
    </ul>
  </div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import { useAlbum } from '../../composables/fetch-core'

const route = useRoute()
const albumID = route.params.id

const {
  loading,
  result,
  getAlbumImages
} = useAlbum()

getAlbumImages(albumID)
</script>