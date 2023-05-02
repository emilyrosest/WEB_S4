<template>
  <div class="date">
    <div class="today">
      <button @click="today">Today : {{ date }}</button>
    </div>
    <div class="dateSelector">
      <label for="date-picker">Choose a date: </label>
      <input type="date" id="date-picker" v-model="selectedDate" @change="selectDate">
    </div>
    <div class="random">
      <button @click="random">Random date</button>
    </div>
    <div class="prev">
      <button @click="previous">&lt;</button>
    </div>
    <p class="currentDate">{{ currentDate }}</p>
    <div class="next" v-if="nextDate">
      <button @click="next">&gt;</button>
    </div>
    <div class="advertising" v-if="!nextDate">
      <p>Oops! Come back tomorrow</p>
    </div>
  </div>
</template>

<script>
  import { getRandomDate, getTodayDate, getPreviousDate, getNextDate } from '@/services/api/dateUtils.js';

  export default {
    name: 'DateComponent',
    props: ["date"],

    data() {
      return {
        selectedDate: this.date,
        currentDate: null
      }
    },
    computed: {
      // previousDate() {
      //   const previousDate = getPreviousDate(this.currentDate);
      //   const todayDate = getTodayDate();
      //   return previousDate && previousDate !== todayDate;
      // },
      nextDate() {
        const todayDate = getTodayDate();
        if (this.currentDate != getNextDate(todayDate)) {
          return getNextDate(this.currentDate);
        }
        return null;
      },
    },
    methods: {
      initialize() {
        if (this.selectedDate) {
          this.currentDate = this.selectedDate;
        } else {
          this.currentDate = getTodayDate();
        }
      },
      selectDate() {
        this.currentDate = this.selectedDate;
        this.$emit('date-selected', this.selectedDate);
      },
      today() {
        this.currentDate = this.date;
        this.$emit('date-selected', null);
      },
      async random() {
        const randomDate = await getRandomDate();
        this.currentDate = randomDate;
        this.$emit('date-selected', this.currentDate);
      },
      previous() {
        const previousDate = getPreviousDate(this.currentDate);
        this.currentDate = previousDate;
        this.$emit('date-selected', this.currentDate);
      },
      next() {
        const todayDate = getTodayDate();
        const nextDate = getNextDate(this.currentDate, todayDate);
        this.currentDate = nextDate;
        this.$emit('date-selected', this.currentDate);
      }
    },
    created() {
        this.initialize();
      }
  }
</script>

<style>
  .date {
    background-color: black;
    width: 20%;
    border-style: dotted;
    border-color: aliceblue;
    display: flex;
    flex-direction: column;
    font-size: large;
  }
  .today {
    padding: 10px;
  }
  .dateSelector {
    padding: 10px;
  }
  .random {
    padding: 10px;
  }
  .currentDate {
    font-size: x-large;
    text-align: center;
  }
  .advertising {
    font-family: Papyrus;
    font-size: 80px;
  }
</style>

