<template>
    <div class="birthday">
        <h3>My Birthday</h3>
        <input type="date" id="date-picker" v-model="birthday" @change="saveBirthday">
        <p class="date">{{ birthday }}</p>
        <p class="title"><u>{{ apodDataOfBirthday.title }}</u></p>
        <div class="image">
            <img v-bind:src="apodDataOfBirthday.url"/>
        </div>
        <p class="author"><i>{{ apodDataOfBirthday.copyright }}</i></p>
        <p>{{ apodDataOfBirthday.explanation }}</p>
    </div>
</template>

<script>
    import {getDataFromDate} from '@/services/api/apodAPI.js'
    export default {
        name: 'BirthdayComponent',
        data() {
            return {
                birthday: null,
                apodDataOfBirthday: {},
            }
        },
        mounted() {
            this.loadBirthdayFromCache();
            this.getApodDataOfBirthday();
        },
        watch: {
            birthday(newBirthday) {
                this.getApodDataOfBirthday(newBirthday);
            }
        },
        methods: {
            saveBirthday() {
            localStorage.setItem('birthday', this.birthday);
            },

            loadBirthdayFromCache() {
            const cachedBirthday = localStorage.getItem('birthday');
            if (cachedBirthday) {
                this.birthday = cachedBirthday;
            }
            },

            async getApodDataOfBirthday() {
                this.apodDataOfBirthday = await getDataFromDate(this.birthday);
            }
        },
    }
</script>

<style scoped>
.birthday {
  background-image: url(../assets/systems-nasa-galaxy-sky-meteor-planet-pictures-21.png);
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  border-style: dashed;
  border-color: aliceblue;
  box-sizing: border-box;
  font-family: Papyrus;
  font-size: 1vw;
  text-align: center;
  padding: 20px;
  margin-bottom: 2vw;
}

h3 {
  font-size: 4vw;
  font-style: italic;
  margin: 20px auto;
}

.date {
  margin-top: 0;
}

.author {
  font-size: large;
  text-align: right;
  margin-top: 20px;
}

.title {
  font-size: x-large;
  margin-bottom: 20px;
  text-align: center;
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

@media only screen and (max-width: 768px) {
  .birthday {
    font-size: 3vw;
  }

  h3 {
    font-size: 8vw;
  }
}

</style>

