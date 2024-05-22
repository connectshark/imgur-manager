import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const useFetch = ( uri, options ) => {
  const DOMAIN = import.meta.env.VITE_API_DOMAIN + '/imgur'
  const loading = ref(false)
  const result = ref(null)
  const error = ref(null)
  const store = useUserStore()
  /**
   * Fetch data from the API.
   * @param {object} content - Content options for the fetch.
   * @param {string} content.method - 方法，預設是GET
   * @param {string} content.json - 內容是否是json，預設是true
   * @param {object} content.body - body內容
   */
  const doFetch = async ({ method, page, json, body } = { method: 'GET', page: 0, json: true, body: undefined }) => {
    loading.value = true
    result.value = null
    error.value = null

    const API_URL = DOMAIN + uri + `?page=${ page }`
    const fetchOptions = {
      method: method,
      headers: {
        Authorization: `Bearer ${store.token}`
      }
    }

    if (!json) {
      fetchOptions.headers['Content-Type'] = 'application/json'
    }

    if (body) {
      fetchOptions.body = body
    }

    const fetch_response = await fetch(API_URL, fetchOptions)
    
    if (fetch_response.ok === false) {
      error.value = fetch_response.statusText
    } else { 
      const res = await fetch_response.json()
      result.value = res
    }

    loading.value = false
  }

  const isImmediate = options?.immediate !== false

  if (isImmediate) {
    doFetch()
  }
  
  return {
    loading,
    result,
    doFetch,
    error
  }
}

export default useFetch