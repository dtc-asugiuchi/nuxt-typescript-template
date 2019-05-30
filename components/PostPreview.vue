<template>
  <router-link :to="postDetailUrl">
    <v-card v-if="post">
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>{{ post.description }}</v-card-text>
    </v-card>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Post from '../models/Post'

@Component
export default class PostPreview extends Vue {
  @Prop({ type: Object, required: true }) post!: Post

  private postDetailUrl: Object = {
    path: 'detail',
    query: { postId: 1 }
  }
}
</script>
