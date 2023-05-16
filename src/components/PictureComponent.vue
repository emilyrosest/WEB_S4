<template>
    <div class="picture">
        <p class="title"><u>{{ title }}</u></p>
        <div class="image">
            <img v-bind:src="pictureUrl"/>
        </div>
        <p class="author"><i>{{ author }}</i></p>
    </div>
</template>

<script>
export default {
    name: 'PictureComponent',
    props: ["title", "pictureUrl", "author"]
}
</script>

<style scoped>
    .picture {
        background-image: url(../assets/systems-nasa-galaxy-sky-meteor-planet-pictures-21.png);
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        border-style: double;
        border-color: aliceblue;
        box-sizing: border-box;
        padding: 20px;
        font-family: Papyrus;
    }
    .title {
        font-size: x-large;
        margin-bottom: 20px;
        text-align: center;
    }
    .author {
        font-size: large;
        text-align: right;
        margin-top: 20px;
    }
    .image {
        position: relative;
        overflow: hidden;
        padding-bottom: 56.25%;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }
</style>