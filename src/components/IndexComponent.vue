<template>
<div class="index">
    <div v-for="entry in entries" :key="entry.date">
    <router-link :to="{name: 'picture', params: {date: entry.date}}">
        <img :src="entry.thumbnail" :alt="entry.title" />
        <h2>{{ entry.title }}</h2>
    </router-link>
    </div>
</div>
</template>

<script>
import { getRandomData } from '@/services/api/apodAPI'

export default {
    name: "IndexComponent",
    data() {
        return {
        entries: [],
        };
    },
    async created() {
        const data = await getRandomData();
        this.entries = data.map((entry) => ({
        date: entry.date,
        title: entry.title,
        thumbnail: entry.url,
        }));
    },
};
</script>


<style scoped> 
.index {
    display: flex;
}
img {
    width: 200px;
}

</style>
