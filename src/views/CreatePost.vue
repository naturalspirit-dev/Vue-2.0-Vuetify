<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Create a New Post</h1>
        <v-text-field label="Title" v-model="title"></v-text-field>
        <v-textarea label="Body" v-model="body"></v-textarea>
        <v-btn color="primary" @click="createPost">Create Post</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    async createPost() {
      await this.$store.dispatch('createPost', { title: this.title, body: this.body })
      this.$router.push({ name: 'homeview' })
    }
  }
}
</script>
