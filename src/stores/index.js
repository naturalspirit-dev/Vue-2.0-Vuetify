import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    comments: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_POST(state, post) {
      state.post = post
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      commit('SET_POSTS', response.data)
    },
    async fetchPost({ commit }, id) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      commit('SET_POST', response.data)
    },
    async fetchComments({ commit }, postId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      commit('SET_COMMENTS', response.data)
    },
    async createPost(_, post) {
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then(() => alert('success'))
      .catch((err) => alert(err));
    },
    async deletePost(_, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => alert('success'))
      .catch((err) => alert(err));
    },
    // Add the updatePost action:
    async updatePost(_, { id, title, body }) {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })
      .then(() => alert('success'))
      .catch((err) => alert(err));
    },
  },
  modules: {}
})
