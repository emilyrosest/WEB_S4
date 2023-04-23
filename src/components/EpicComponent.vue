<template>
    <div class="epic">
        <p>{{date}}</p>
        <div class="image">
            <img v-bind:src="epicImage"/>
        </div>
    </div>
</template>

<script>
    import { getEpicImageURL } from '@/services/api/epicAPI.js';

    export default {
        name: 'EpicComponent',
        props: ["date"],
        
        data() {
            return {
                epicImage: null,
            }
        },
        async created() {
            this.epicImage = await getEpicImageURL(this.date);
            console.log(this.epicImage);
        }
    }
</script>

<style>
    .image {
        height: 600px;
        display: flex;
        justify-content: center;
    }
</style>

