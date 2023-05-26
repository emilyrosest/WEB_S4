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
    background-image: url(../assets/systems-nasa-galaxy-sky-meteor-planet-pictures-21.png);
    width: 80%;
    font-family: Papyrus;
    font-style: italic;
    font-size: 2vw;
    margin-bottom: 0;
    padding: 1vw;
    padding-bottom: 2vw;
    border-style: dotted;
    border-color: aliceblue;
  }

  @media only screen and (max-width: 768px) {
    .explanation {
      font-size: 4vw;
      border-image-width: 4vw;
      padding: 2vw;
    }
  }
  @media only screen and (min-width: 1024px) {
    .explanation {
      font-size: 1.5vw;
      border-image-width: 1.5vw;
      padding: 0.5vw;
    }
  }
</style>

