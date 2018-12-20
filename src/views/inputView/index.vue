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
          <input-table v-model="input.schedule"></input-table>
          <v-divider></v-divider>
          <v-btn class="primary" round @click="addSchedule">submit</v-btn>
          <v-divider></v-divider>
        </v-div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import firebase from 'firebase'
  import VDiv from '@/components/VDiv'
  import InputTable from './InputTable.vue'
  export default {
    data() {
      return {
        input: {
          fullname: '',
          schedule: {},
        },
        userId: '',
        snackbar: false,
        notification: {}
      }
    },
    methods: {
      addSchedule() {
        firebase.database().ref('/2018/1/' + this.userId).set(this.input)
        this.notification = {
          id: this.userId,
          name: this.input.fullname
        }
        this.snackbar = true
        this.reset()
      },
      reset() {
        this.input = {
          schedule: {},
          fullname: ''
        }
        this.userId= ''
      }
    },
    components: {
      VDiv,
      InputTable
    }
  }
</script>

<style>

</style>