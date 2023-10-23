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
    <div class=" text-right">
      <button :disabled="deleteLoading" @click="deleteThisAlbum" class="hover:underline" type="button">刪除</button>
    </div>
    <div v-if="deleteResult">
      <p>刪除狀態: {{ deleteResult }}</p>
      <p>
        <router-link to="/album" class="underline">回相簿首頁</router-link>
      </p>
    </div>
  </div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import useFetch from '@/composables/useFetch'

const route = useRoute()
const albumID = route.params.id

const {
  loading,
  result
} = useFetch(`/album/${route.params.id}`)

const {
  loading: deleteLoading,
  doFetch: deleteAlbum,
  result: deleteResult
} = useFetch(`/album`, {
  immediate: false
})

const deleteThisAlbum = async () => {
  const response = window.confirm(`確定刪除？`)
  if (!response) return

  await deleteAlbum({
    method: 'DELETE',
    body: JSON.stringify({
      deleteHash: albumID
    })
  })
}


</script>