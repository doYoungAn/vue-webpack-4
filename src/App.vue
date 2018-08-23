<template>
  <div class="full-width center-content">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <Sample name="World" />
    <router-view />
  </div>
</template>

<script>
import Sample from '@/components/sample.vue'

export default {
  components: {
    Sample
  }
}
</script>
