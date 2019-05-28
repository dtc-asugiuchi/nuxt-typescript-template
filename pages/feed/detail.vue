<!-- pages/feed.vue -->
<template>
  <div>
    <PostContentView :post="post" />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Route } from 'vue-router'
import Post from '../../models/Post'
import PostContentView from '../../components/PostContentView.vue'

interface WithRoute {
  $route: Route
}

@Component({
  components: { PostContentView }
})
export default class FeedPage extends Vue implements WithRoute {
  @Prop({ type: Object, required: true }) post!: Post

  /** data() */
  private flag: boolean = false

  /** method() */
  private toggleFlag() {
    this.flag = !this.flag
  }
  mounted() {
    console.log(this.$route)
  }
  async created() {
    const { data } = await axios.get(`http://localhost:8000/feed/id`)
    const resp = data.response[0]
    this.post = resp
  }
}
</script>
