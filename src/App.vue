<template>
  <div class="container">
    <apodGallery/>
  </div>
</template>

<script>
import apodGallery from './Gallery.vue'

export default {
  name: 'App',
  components: {
    apodGallery
  },
}
</script>

<style>
  #app {
    background-image: url("./assets/maxresdefault.jpg");
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    color: white;
  }
</style>