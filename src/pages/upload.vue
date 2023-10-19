<template>
<DefaultLayout>
<div class=" mx-auto w-11/12">
  <h2 class=" text-2xl/loose">上傳</h2>
  <section>
    <form @submit.prevent="submitHandler" ref="form">
      <div class="mb-4 text-center relative py-20 bg-gray-200 hover:opacity-70" :class="{ 'opacity-70': dragover }">
        <p>拖曳或點擊</p>
        <input @dragover="dragover = true" @dragleave="dragover = false" @drop="dragover = false" accept="image/png, image/jpg, image/jpeg" type="file" id="image" @change="fileHandler($event)" class=" absolute inset-0 opacity-0 cursor-pointer">
      </div>
      <div class="mb-4 text-right">
        <button
          :disabled="files.length <= 0 || loading"
          class="hover:opacity-80 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:bg-gray-400 bg-primary text-white rounded-lg px-3 py-2"
          type="submit"
        >上傳</button>
      </div>
      <section class="mb-10" v-if="result">
        <ul class=" flex">
          <li class=" inline-block align-middle">
            <figure>
              <img :src="`https://i.imgur.com/${ img.data.id }s.${ img.data.type.split('/')[1] }`" alt="">
            </figure>
            <p>複製連結
              <CopyBtn :source="img.data.link"/>
            </p>
          </li>
        </ul>
      </section>
      <ul v-if="files.length > 0" class=" grid grid-cols-4 gap-4">
        <li v-for="img in files" :key="img.id" class=" bg-cover bg-center aspect-square" :style="{ backgroundImage: `url(${img.url})` }">
          <div class="w-full h-full flex items-center justify-center hover:backdrop-blur-sm group">
            <button @click="deleteImage(img.id)" class="group-hover:opacity-100 opacity-0" type="button">
              <i class='bx bx-x-circle bx-md'></i>
            </button>
          </div>
        </li>
      </ul>
    </form>
  </section>
</div>
</DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '../layouts/default.vue'
import useFetch from '../composables/useFetch'
import CopyBtn from '../components/copyBtn.vue'

const dragover = ref(false)
const files = ref([])
const form = ref(null)

const {
  loading,
  result,
  doFetch: uploadImage
} = useFetch(`/image`, {
  immediate: false
})


const submitHandler = async () => {
  const imgs = files.value
  const form = new FormData()
  imgs.forEach(img => {
    form.append(img.id, img.file)
  })
  await uploadImage({
    method: 'POST',
    body: form,
    json: false
  })
}

const deleteImage = async (imgID) => {
  const targetIndex = files.value.findIndex(img => img.id === imgID)
  files.value.splice(targetIndex, 1)
}

const fileHandler = async (e) => {
  const img = e.target.files[0]
  const reader = new FileReader()
  reader.onloadend = async e => {
    files.value.push({
      url: e.target.result,
      id: Date.now(),
      file: img
    })
    form.value.reset()
  }
  reader.readAsDataURL(img)
}
</script>