<template>
    <div class="footer">
        <p class="reference">Made by <a href="https://emilyrose.fr/">Emily-Rose</a> 
            with <a href="https://apod.nasa.gov/apod/astropix.html">Nasa's APOD API</a> 
            on <a href="https://github.com/emilyrosest/WEB_S4">Github</a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style>
  .footer {
    margin: 0;
    font-family: Papyrus;
    font-size: 5vw;
    text-align: center;
  }
  
  .reference {
    font-size: 2.5vw;
    margin: 0;
  }
  
  .reference a {
    color: rgb(255, 66, 198);
    text-decoration: none;
    border-bottom: 1px dotted white;
  }
  
  .reference a:hover {
    border-bottom-style: solid;
  }
  
  @media only screen and (max-width: 768px) {
    .reference {
      font-size: 4vw;
    }
  
    .footer {
      font-size: 10vw;
    }
  }
</style>

