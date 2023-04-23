<template>
  <div class="explanation">
    <p>{{ explanation }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ExplanationComponent',
    props: ["explanation"]
  }
</script>

<style>
  .explanation {
    background-color: black;
    width: 80%;
    font-family: Comic Sans MS;
    font-style: italic;
    font-size: large;
    border-image: url(../assets/Frame\ 1.png) 80 fill / 50px / 20px space;
    margin-bottom: 0;
  }
</style>

