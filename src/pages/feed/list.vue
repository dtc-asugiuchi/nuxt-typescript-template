<!-- pages/feed.vue -->
<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'nuxt-property-decorator'
import Post from '../../models/Post'
import PostPreview from '../../components/PostPreview.vue'
@Component({
  components: { PostPreview }
})
export default class FeedPage extends Vue {
  posts: Post[] = []
  async created() {
    const { data } = await axios.get(`http://localhost:8000/feed/list`)
    const resp = data.response
    this.posts = resp
  }
}
</script>
