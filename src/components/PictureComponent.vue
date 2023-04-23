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

<style>
    .picture {
        background-color: black;
        width: 70%;
        border-image: url(../assets/Frame\ 2.png) 70 fill / 55px / 30px space;
    }
    .title {
        padding: 20px;
        font-size: x-large;
    }
    .author {
        padding: 20px;
        font-size: large;
        text-align: end;
    }
    .image {
        height: 600px;
        display: flex;
        justify-content: center;
    }
</style>

