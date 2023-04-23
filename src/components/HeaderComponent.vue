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

<style>
    .hearder, h1 {
        margin: 0;
        font-family: Papyrus;
        font-size: 100px;
        text-align: center;
    }
</style>

