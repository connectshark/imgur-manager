<template>
<DefaultLayout>
  <div class="mx-auto w-11/12">
    <h2 class=" text-2xl/loose">Albums</h2>
    <div v-if="loading" class=" text-center">
      <i class='bx bx-loader bx-spin' ></i>
    </div>
    <div class=" text-center" v-else-if="result.length <= 0">
      <p>無相簿</p>
    </div>
    <ul v-else class=" grid grid-cols-2 gap-4">
      <li class="text-center py-10 bg-gray-800" v-for="album in result" :key="album.id">
        <router-link :to="`/album/${ album.id }`" class="mix-blend-screen bg-white inline-block text-black p-3">{{ album.title }} <i class='bx bx-photo-album'></i>{{ album.images_count }}</router-link>
      </li>
    </ul>
  </div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useAlbum } from '../../composables/fetch-core'

const {
  loading,
  result,
  getAllAlbums
} = useAlbum()

getAllAlbums()
</script>