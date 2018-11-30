<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 v-for="(user, id) in data" :key="id">
        {{user.fullname}}
        <br />
        <div v-for="(time, day) in user.schedule" :key="day">
          {{day}} : {{time}}
        </div>
      </v-flex>
      <v-flex xs12>
        <v-text-field v-model="userId" label="ID"></v-text-field>
        <v-text-field v-model="input.fullname" label="Fullname"></v-text-field>
        <v-text-field v-model="input.schedule.monday" label="Date Time"></v-text-field>
        <v-btn @click="addNew">submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        data: {},
        input: {
          schedule: {}
        },
        userId: ''
      }
    },
    methods: {
      setData(data) {
        this.data = data.val()
      },
      addNew() {
        firebase.database().ref('/2018/1/' + this.userId).set(this.input);
      }
    },
    mounted() {
      firebase.database().ref('/2018/1').on('value', this.setData)
    },
  }
</script>

<style>

</style>