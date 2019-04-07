<template>
  <div id="app">
    <blog-header />
    <router-view/>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'
export default {
  name: 'App',
  components: {
    BlogHeader
  }
}
</script>

<style>

</style>
