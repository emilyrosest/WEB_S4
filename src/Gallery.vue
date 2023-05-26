<template>
  <div class="body">
    <PictureComponent :title="apodData?.title" :pictureUrl="apodData?.url" :author="apodData?.copyright"></PictureComponent>
    <DateComponent :date="todayDate" @date-selected="onDateSelected" @update-current-date="updateCurrentDate"></DateComponent>
  </div>
  <div class="explanation-container">
    <ExplanationComponent :explanation="apodData?.explanation"></ExplanationComponent>
  </div>
  <BirthdayComponent></BirthdayComponent>
  <IndexComponent></IndexComponent>
</template>

<script>
import PictureComponent from './components/PictureComponent.vue'
import DateComponent from './components/DateComponent.vue'
import ExplanationComponent from './components/ExplanationComponent.vue'
import IndexComponent from './components/IndexComponent.vue'
import BirthdayComponent from './components/BirthdayComponent.vue'
import {getDataOfToday, getDataFromDate} from '@/services/api/apodAPI.js'

export default {
  name: 'GalleryComponent',
  components: {
    PictureComponent,
    DateComponent,
    ExplanationComponent,
    IndexComponent,
    BirthdayComponent
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
    align-items: center; 
  }

  .explanation-container {
    display: flex;
    justify-content: center;
    margin: 20px
  }

  @media (max-width: 767px) {
    .body {
      flex-direction: column;
      align-items: center;
    }

    .picture-container,
    .date-container {
      flex: auto;
      max-width: none;
      width: 100%;
    }
  }
</style>