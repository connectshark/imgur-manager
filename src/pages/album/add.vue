<template>
<DefaultLayout>
  <div class="mx-auto w-11/12">
    <h2 class="text-2xl/loose">新建相簿</h2>
    <form @submit.prevent="addNewAlbum" class="p-8 rounded-xl w-11/12 mx-auto bg-white">
      <div class="mb-10">
        <label class="block mb-2" for="album-title">相簿標題</label>
        <input class="w-full border border-primary rounded leading-loose p-2" type="text" v-model="form.title" required id="album-title">
      </div>
      <div class="text-right">
        <button :disabled="loading" class="hover:opacity-80 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:bg-gray-400 bg-primary text-white rounded-lg px-3 py-2" type="submit">新建</button>
      </div>
      <div v-if="result">
        新建結果: {{ result }}
      </div>
    </form>
  </div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/default.vue'
import useFetch from '@/composables/useFetch'
import { reactive } from 'vue'

const form = reactive({
  title: ''
})

const {
  doFetch,
  loading,
  result
} = useFetch(`/album`, {
  immediate: false
})

const addNewAlbum = async () => {
  await doFetch({
    method: 'POST',
    body: JSON.stringify({
      title: form.title
    })
  })
}
</script>