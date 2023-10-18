import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  getters: {
    isLogin () {
      return this.token.length > 0
    }
  },
  actions: {
  }
})
