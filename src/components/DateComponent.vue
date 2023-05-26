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

<style scoped>
.date {
  background-image: url(../assets/systems-nasa-galaxy-sky-meteor-planet-pictures-21.png);
  width: 20%;
  border-image: url(../assets/Frame\ 2.png) 70 fill / 55px / 30px space;
  display: flex;
  flex-direction: column;
  font-size: large;
  align-items: center; 
  padding: 10px;
  font-family: Papyrus;
}

@media (max-width: 600px) {
  .date {
    font-size: medium;
    width: 80%;
  }
}

.today {
  padding: 10px;
  display: flex;
  justify-content: center; 
}

.dateSelector {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.random {
  padding: 10px;
  display: flex;
  justify-content: center; 
}

.currentDate {
  font-size: x-large;
  text-align: center;
  margin: 10px 0; 
}

.advertising {
  font-family: Papyrus;
  font-size: 50px;
  text-align: center;
  margin: 10px 0; 
}


@media (max-width: 600px) {
  .next {
    display: none;
  }
}
</style>

