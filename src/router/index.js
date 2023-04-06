import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostPage from '../views/PostPage.vue'
import CreatePost from '../views/CreatePost.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // Use HTML5 history mode to remove the "#" from the URL
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // Set the path for the HomeView component
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/post/:id', // Set the path for the PostPage component with a dynamic parameter "id"
      name: 'postpage',
      component: PostPage,
      props: true // Pass the dynamic parameter as a prop to the component
    },
    {
      path: '/create-post', // Set the path for the CreatePost component
      name: 'createpost',
      component: CreatePost,
      props: true
    },
    {
      path: '/post/:id/edit',
      name: 'editpost',
      component: EditPost,
      props: true,
    },    
  ]
});