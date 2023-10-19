<template>
<DefaultLayout>
<div class="mx-auto w-11/12">
  <h2 class=" text-2xl/loose">照片詳情 {{ route.params.id }}</h2>
  <section v-if="result">
    <figure class=" text-center">
      <img class=" inline-block" :src="result.data.link" alt="照片">
    </figure>
    <div>
      <button @click="deleteImg(result.data.deletehash)" class=" text-primary hover:underline" type="button">刪除</button>
    </div>
  </section>
</div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import useFetch from '../../composables/useFetch'

const route = useRoute()

const {
  loading,
  result
} = useFetch(`/image/${ route.params.id }`)

const {
  doFetch: deleteImage,
  loading: deleteLoading
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
}
</script>