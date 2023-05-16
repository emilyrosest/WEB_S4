<template>
    <div class="index">
      <div v-for="entry in entries" :key="entry.date" class="entry">
        <img :src="entry.thumbnail" :alt="entry.title" />
        <p class="title"><u>{{ entry.title }}</u></p>
        <p>{{ entry.date }}</p>
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
    flex-wrap: wrap;
    justify-content: center;
    border-style: groove;
    font-family: Papyrus;
    margin-bottom: 60px;
  }
  
  .entry {
    width: 200px;
    margin: 10px;
    text-align: center;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .title {
    margin-top: 5px;
    font-size: 14px;
  }
  </style>