<template>
  <v-container>
    <v-snackbar v-model="snackbar" top vertical>
      {{`Adding ID: ${notification.id} - ${notification.name} Complete`}}
      <v-btn color="pink" flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-layout wrap>
      <v-flex xs12>
        <v-div>
          <h2>Input Form</h2>
          <v-text-field v-model="userId" label="ID" hint="[56][0-9]{9}" mask="##-###-#####"></v-text-field>
          <v-text-field v-model="input.fullname" label="Fullname" hint="[A-Z][a-z]+ [A-Z][a-z]"></v-text-field>
          <v-switch :label="`Type: ${input.type}`" v-model="input.type" :input-value="input.type" false-value="Busy"
            true-value="Free"></v-switch>
          <div v-for="subject in input.schedule" :key="subject">
            <v-select :items="days" v-model="subject.day" label="Day" style="width: 12em; display: inline-block" class="mr-3"></v-select>
            <v-text-field v-model="subject.startTime" label="Start Time" mask="##.##" style="width: 8em; display: inline-block"
              class="mr-3"></v-text-field>
            <v-text-field v-model="subject.endTime" label="End Time" mask="##.##" style="width: em; display: inline-block"></v-text-field>
          </div>
          <div>
            <v-select :items="days" v-model="tempSubject.day" label="Day" style="width: 12em; display: inline-block"
              class="mr-3"></v-select>
            <v-text-field v-model="tempSubject.startTime" label="Start Time" mask="##.##" style="width: 6em; display: inline-block"
              class="mr-3"></v-text-field>
            <v-text-field v-model="tempSubject.endTime" label="End Time" mask="##.##" style="width: 6em; display: inline-block"></v-text-field>
            <v-btn round @click="addTime">add time</v-btn>
          </div>
          <v-divider></v-divider>
          <v-btn class="primary" round @click="addSchedule">submit</v-btn>
        </v-div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import firebase from 'firebase'
  import VDiv from '@/components/VDiv'
  export default {
    data() {
      return {
        input: {
          schedule: [],
          type: 'Busy'
        },
        userId: '',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        tempSubject: {
          startTime: '',
          endTime: '',
          day: '',
        },
        snackbar: false,
        notification: {}
      }
    },
    methods: {
      addSchedule() {
        firebase.database().ref('/2018/1/' + this.userId).set(this.input);
        this.notification = {
          id: this.userId,
          name: this.input.fullname
        }
        this.snackbar = true
        this.reset()
        // console.log(this.input)
      },
      addTime() {
        this.input.schedule.push(this.tempSubject)
        this.tempSubject = {
          startTime: '',
          endTime: '',
          day: ''
        }
      },
      reset() {
        this.input = {
          schedule: [],
          type: 'Busy'
        }
        this.tempSubject = {
          startTime: '',
          endTime: '',
          day: '',
        }
        this.userId= ''
      }
    },
    components: {
      VDiv
    }
  }
</script>

<style>

</style>