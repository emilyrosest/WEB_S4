<template>
  <HeaderComponent></HeaderComponent>
  <div class="body">
    <PictureComponent :title="apodData?.title" :pictureUrl="apodData?.url" :author="apodData?.copyright"></PictureComponent>
    <DateComponent :date="todayDate" @date-selected="onDateSelected" @update-current-date="updateCurrentDate"></DateComponent>
  </div>
  <ExplanationComponent :explanation="apodData?.explanation"></ExplanationComponent>
  <EpicComponent :date="apodData?.date"></EpicComponent>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import PictureComponent from './components/PictureComponent.vue'
import DateComponent from './components/DateComponent.vue'
import ExplanationComponent from './components/ExplanationComponent.vue'
import EpicComponent from './components/EpicComponent.vue'
import {getDataOfToday, getDataFromDate} from '@/services/api/apodAPI.js'

export default {
  name: 'apodGallery',
  components: {
    HeaderComponent,
    PictureComponent,
    DateComponent,
    ExplanationComponent,
    EpicComponent
  },
  data() {
    return {
      apodDataOfToday: {},
      apodData : {},
      todayDate : null,
      selectedDate: null,
    }
  },
  async created() {
    this.apodDataOfToday = await getDataOfToday();
    this.apodData = this.apodDataOfToday;
    this.todayDate = this.apodDataOfToday.date;
  },
  methods: {
    async onDateSelected(newDate) {
      if (newDate === null) {
        this.apodData = this.apodDataOfToday;
      } else {
        this.apodData = await getDataFromDate(newDate);
      }
      this.selectedDate = newDate;
    },
  }
}

</script>

<style>
  .body {
    display: flex;
    justify-content: center;
  }
</style>