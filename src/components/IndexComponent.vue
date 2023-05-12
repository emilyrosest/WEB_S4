<template>
<div class="index">
    <div v-for="entry in entries" :key="entry.date">
    <router-link :to="{name: 'picture', params: {date: entry.date}}" @click="updateSelectedDate(entry.date)">
        <img :src="entry.thumbnail" :alt="entry.title" />
        <a href=entry.thumbnail>{{ entry.title }}</a>
    </router-link>
    </div>
    <div class="selected-date">
        <h2>Selected date: {{ selectedDate }}</h2>
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
        selectedDate: '',
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
