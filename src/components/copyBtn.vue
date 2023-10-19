<template>
<button type="button" @click="copy(props.source)">
  <i v-if="copied" class='bx bxs-copy-alt bx-md' ></i>
  <i v-else class='bx bx-copy-alt bx-md'></i>
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