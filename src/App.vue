<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
    <apodGallery/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import apodGallery from './Gallery.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    apodGallery,
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