import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const useFetch = ( uri, options ) => {
  const DOMAIN = import.meta.env.VITE_API_DOMAIN + '/imgur'
  const loading = ref(false)
  const result = ref(null)
  const store = useUserStore()

  const doFetch = async (content) => {
    loading.value = true
    const API_URL = DOMAIN + uri
    const fetchOptions = {
      method: content?.method || 'GET',
      headers: {
        Authorization: `Bearer ${store.token}`
      }
    }

    const isJson = (content?.json === false) ? false : true
    if (isJson) {
      fetchOptions.headers['Content-Type'] = 'application/json'
    }


    if (content?.body) {
      fetchOptions.body = content.body
    }

    const fetch_response = await fetch(API_URL, fetchOptions)
    const res = await fetch_response.json()
    result.value = res
    loading.value = false
  }

  const isImmediate = (options?.immediate === false) ? false : true

  if (isImmediate) {
    doFetch()
  }
  
  return {
    loading,
    result,
    doFetch
  }
}

export default useFetch