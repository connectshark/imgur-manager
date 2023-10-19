<template>
<DefaultLayout>
  <div class="mx-auto w-11/12">
    <h2 class="text-2xl/loose">相簿 {{ albumID }}</h2>
    <div v-if="loading" class=" text-center">
      <i class='bx bx-loader bx-spin' ></i>
    </div>
    <ul v-else>
      <li class=" inline-block align-middle" v-for="img in result.data" :key="img.id">
        <router-link :to="`/image/${ img.id }`">
          <img loading="lazy" :src="`https://i.imgur.com/${ img.id }s.${ img.type.split('/')[1] }`" alt="image">
        </router-link>
      </li>
    </ul>
  </div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import useFetch from '../../composables/useFetch'

const route = useRoute()
const albumID = route.params.id

const {
  loading,
  result
} = useFetch(`/album/${route.params.id}`)
</script>