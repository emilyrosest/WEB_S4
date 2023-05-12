<template>
    <div class="header">
        <h1 v-text="'Astronomy picture of the day'"></h1>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style scoped>
    .header {
        text-align: center;
    }
    
    h1 {
        font-family: Papyrus, sans-serif;
        font-size: 5vw;
        color: white;
        margin: 0;
        padding: 20px;
    }
</style>

