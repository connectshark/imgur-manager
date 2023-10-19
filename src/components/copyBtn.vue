<template>
<button :disabled="copied" class="hover:opacity-80 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:bg-gray-400 bg-primary text-white rounded-lg px-3 py-1" type="button" @click="copy(props.source)">
  <i v-if="copied" class='bx bxs-copy-alt bx-sm align-middle' ></i>
  <i v-else class='bx bx-copy-alt bx-sm align-middle'></i>
</button>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  source: {
    type: String
  }
})

const {
  copy,
  copied
} = useClipboard()

</script>