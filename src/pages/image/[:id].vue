<template>
<DefaultLayout>
<div class="mx-auto w-11/12">
  <h2 class=" text-2xl/loose">照片詳情 {{ route.params.id }}</h2>
  <section v-if="deleteResult?.data" class=" text-center">
    <h3 class="text-3xl/loose">刪除成功</h3>
    <p>
      <router-link class=" underline" to="/image">回相片集</router-link>
    </p>
  </section>
  <section v-if="result">
    <figure class="mb-10 text-center">
      <img class="inline-block" :src="result.data.link" alt="照片">
    </figure>
    <div class="flex items-center gap-6 justify-end">
      <CopyBtn :source="result.data.link"/>
      <button @click="deleteImg(result.data.deletehash)" class="disabled:cursor-not-allowed rounded-lg hover:underline text-red-400" type="button">刪除</button>
    </div>
  </section>
</div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import useFetch from '../../composables/useFetch'
import CopyBtn from '../../components/copyBtn.vue'

const route = useRoute()

const {
  loading,
  result
} = useFetch(`/image/${ route.params.id }`)

const {
  doFetch: deleteImage,
  loading: deleteLoading,
  result: deleteResult
} = useFetch(`/image`, {
  method: 'DELETE',
  immediate: false
})

const deleteImg = async (deleteHash) => {
  await deleteImage({
    method: 'DELETE',
    body: JSON.stringify({
      hash: deleteHash
    })
  })
  if (deleteResult.value.data) {
    result.value = null
  }
}
</script>