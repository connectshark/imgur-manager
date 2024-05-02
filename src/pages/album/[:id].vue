<template>
<DefaultLayout>
  <div class="mx-auto w-11/12">
    <h2 class="text-2xl/loose">相簿 {{ albumID }}</h2>
    <div>
      <router-link to="/album" class=" underline"><i class='bx bx-chevron-left'></i>回上一頁</router-link>
    </div>
    <div v-if="loading" class=" text-center">
      <i class='bx bx-loader bx-spin' ></i>
    </div>
    <ul v-else class="mb-10">
      <li class=" inline-block align-middle" v-for="img in result.data.images" :key="img.id">
        <router-link :to="`/image/${ img.id }`">
          <img loading="lazy" :src="`https://i.imgur.com/${ img.id }s.${ img.type.split('/')[1] }`" alt="image">
        </router-link>
      </li>
    </ul>
    <section class="mb-10" v-if="store.isLogin">
      <div v-if="loading" class=" text-center">
        <i class='bx bx-loader bx-spin' ></i>
      </div>
      <div v-else>
      <form @submit.prevent="submitHandler">
        <h2>更新相簿</h2>
        <div class="mb-6">
          <label class=" block" for="albumID">相簿標題: {{ result.data.title || '未設定' }}</label>
          <input v-focus v-model="albumTitle" class="w-full border border-primary rounded leading-loose p-2" type="text" required id="albumID" placeholder="設定新的相簿標題">
        </div>
        <div class="text-right">
          <button :disabled="loading" class="hover:opacity-80 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:bg-gray-400 bg-primary text-white rounded-lg px-3 py-2" type="submit">更新</button>
        </div>
      </form>
      </div>
    </section>
    <section v-if="store.isLogin">
      <div class=" text-right">
        <button :disabled="deleteLoading" @click="deleteThisAlbum" class="hover:underline" type="button">刪除</button>
      </div>
      <div v-if="deleteResult">
        <p>刪除狀態: {{ deleteResult }}</p>
        <p>
          <router-link to="/album" class="underline">回相簿首頁</router-link>
        </p>
      </div>
    </section>
  </div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import useFetch from '@/composables/useFetch'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
const store = useUserStore()

const route = useRoute()
const { id: albumID } = route.params

const {
  loading,
  result,
  doFetch: reload
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

const {
  loading: updateAlbumLoading,
  doFetch: updateAlbum,
  result: updateAlbumResult
} = useFetch(`/album/${route.params.id}`, {
  immediate: false
})


const albumTitle = ref('')

const vFocus = {
  mounted: (el) => el.focus()
}

const submitHandler = async () => {
  const response = window.confirm('確定更新？')
  if (!response) return
  await updateAlbum({
    method: 'PUT',
    body: JSON.stringify({
      title: albumTitle.value
    })
  })
  albumTitle.value = ''
  await reload()
}

</script>