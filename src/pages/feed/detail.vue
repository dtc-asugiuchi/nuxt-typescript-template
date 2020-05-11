<!-- pages/feed.vue -->
<template>
  <div>
    <PostContentView :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Route } from 'vue-router'
import Post from '../../models/Post'
import PostContentView from '../../components/PostContentView.vue'
import { detail } from '../../mixins/api'

interface WithRoute {
    $route: Route
}

@Component({
    components: { PostContentView }
})
export default class FeedPage extends Vue implements WithRoute {
  @Prop({ type: Object, required: true }) post!: Post
  // private post: Post = new Post();

  /** data() */
  private flag: boolean = false

  /** method() */
  private toggleFlag() {
    this.flag = !this.flag
  }
  async created() {
    const { data } = await detail(
      'feed',
      {
        // postId: this.$route.query.postId
      },
      this.$route.path
    )
    const resp = data.response[0]
    console.log(data.response)
    this.post = resp
  }
}
</script>
