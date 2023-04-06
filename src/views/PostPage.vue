<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <v-btn color="warning" @click="editPost">Edit Post</v-btn>
        <v-btn color="error" @click="deletePost">Delete Post</v-btn>
        <h3>Comments</h3>
        <v-list>
          <v-list-item v-for="comment in comments" :key="comment.id">
            <v-list-item-title>{{ comment.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ comment.body }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PostPage',
  props: {
    id: {
      required: true
    }
  },
  computed: {
    ...mapState(['post', 'comments'])
  },
  created() {
    this.$store.dispatch('fetchPost', this.id)
    this.$store.dispatch('fetchComments', this.id)
  },
  methods: {
    editPost() {
      this.$router.push({ name: 'editpost', params: { id: this.post.id } })
    },
    async deletePost() {
      await this.$store.dispatch('deletePost', this.post.id)
      this.$router.push({ name: 'homeview' })
    }
  }
}
</script>