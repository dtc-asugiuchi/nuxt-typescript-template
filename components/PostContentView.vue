<template>
  <v-card v-if="post">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text>{{ post.description }}</v-card-text>
    <v-card-text>{{ post.content }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Post from '../models/Post'

@Component
export default class PostContentView extends Vue {
  @Prop({ type: Object, required: true }) post!: Post
}
</script>
