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
    <div class="mb-10 flex items-center gap-6 justify-between">
      <router-link to="/image" class=" underline"><i class='bx bx-chevron-left'></i>回上一頁</router-link>
      <div class=" space-x-4">
        <CopyBtn :source="result.data.link"/>
        <button v-if="store.isLogin" @click="deleteImg(result.data.deletehash)" class="disabled:cursor-not-allowed rounded-lg hover:underline" type="button">刪除</button>
      </div>
    </div>
    <figure class="">
      <img class="max-w-96 aspect-square object-contain mx-auto" :src="result.data.link" alt="照片">
    </figure>
  </section>
</div>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../../layouts/default.vue'
import { useRoute } from 'vue-router'
import useFetch from '../../composables/useFetch'
import CopyBtn from '../../components/copyBtn.vue'
import { useUserStore } from '../../stores/user'

const store = useUserStore()

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
  const response = window.confirm('確定刪除？')
  if (!response) return
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