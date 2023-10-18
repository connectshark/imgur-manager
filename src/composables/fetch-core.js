import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const useAlbum = () => {
  const loading = ref(false)
  const result = ref(null)
  const DOMAIN = import.meta.env.VITE_API_DOMAIN + '/imgur'
  const store = useUserStore()

  const getAllAlbums = async () => {
    loading.value = true
    const API_URL = DOMAIN + `/albums`
    const fetch_response = await fetch(
      API_URL, {
        headers: {
          Authorization: `Bearer ${store.token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const res = await fetch_response.json()
    result.value = res.data
    loading.value = false
  }

  const getAlbumImages = async (albumID) => {
    loading.value = true
    const API_URL = DOMAIN + `/album/${albumID}`
    const fetch_response = await fetch(
      API_URL, {
        headers: {
          Authorization: `Bearer ${store.token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const res = await fetch_response.json()
    result.value = res
    loading.value = false
  }

  return {
    loading,
    result,
    getAllAlbums,
    getAlbumImages
  }
}

const useImages = () => {
  const loading = ref(false)
  const result = ref(null)
  const DOMAIN = import.meta.env.VITE_API_DOMAIN + '/imgur'
  const store = useUserStore()

  const getAllImages = async () => {
    loading.value = true

    const API_URL = DOMAIN + `/image`
    const fetch_response = await fetch(
      API_URL, {
        headers: {
          Authorization: `Bearer ${store.token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const res = await fetch_response.json()

    result.value = res
    loading.value = false
  }

  const uploadImage = async (img) => {
    loading.value = true

    const form = new FormData()
    form.append('img', img)
    const API_URL = DOMAIN + `/image`
    const fetch_response = await fetch(API_URL, {
      method: 'POST',
      body: form,
      headers: {
        Authorization: `Bearer ${store.token}`
      }
    })
    const res = await fetch_response.json()

    result.value = res
    loading.value = false
  }

  const getTargetImage = async (imageID) => {
    loading.value = true

    const API_URL = DOMAIN + `/image/${ imageID }`
    const fetch_response = await fetch(
      API_URL, {
        headers: {
          Authorization: `Bearer ${store.token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const res = await fetch_response.json()
    result.value = res.data
    loading.value = false
  }

  const deleteImage = async (deleteHash) => {
    loading.value = true

    const API_URL = DOMAIN + `/image`
    const fetch_response = await fetch(
      API_URL, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${store.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hash: deleteHash
        })
      }
    )
    const res = await fetch_response.json()
    result.value = res
    loading.value = false
  }

  return {
    loading,
    result,
    getAllImages,
    uploadImage,
    getTargetImage,
    deleteImage
  }
}

export {
  useAlbum,
  useImages
}