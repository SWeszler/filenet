export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated(state) {
    return state.user !== null
  }
}

export const mutations = {
  login(state, user) {
    console.log("LOGIN")
    state.user = {
      "email": user.email,
      "uid": user.uid
    }
  }
}