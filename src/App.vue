<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <GalleryComponent/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import GalleryComponent from './Gallery.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    GalleryComponent,
    FooterComponent
  },
}
</script>

<style>
  #app {
    background-image: url("./assets/maxresdefault.jpg");
    background-image: url(./assets/systems-nasa-galaxy-sky-meteor-planet-pictures-21.png);
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    color: white;
  }
</style>