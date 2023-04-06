<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Edit Post</h1>
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-textarea label="Body" v-model="body"></v-textarea>
          <v-btn color="primary" @click="updatePost">Save Changes</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    props: {
      id: {
        required: true,
      },
    },
    data() {
      return {
        title: '',
        body: '',
      };
    },
    computed: {
      ...mapState(['post']),
    },
    created() {
      this.title = this.post.title;
      this.body = this.post.body;
    },
    methods: {
      async updatePost() {
        await this.$store.dispatch('updatePost', { id: this.post.id, title: this.title, body: this.body });
        this.$router.push({ name: 'postpage', params: { id: this.post.id } });
      },
    },
  };
  </script>
  