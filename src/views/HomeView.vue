<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>All Posts</h1>
        <v-btn color="primary" to="/create-post">Create New Post</v-btn>
        <v-list>
          <v-list-item v-for="post in posts" :key="post.id" @click="goToPost(1)">
            <v-list-item-title>{{ post.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['posts'])
  },
  created() {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    goToPost(id) {
      this.$router.push({name: 'postpage', params: {id}});
    }
  }
}
</script>