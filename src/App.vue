<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest">
          vuetify
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import Home from '@/views/Home'
  import About from '@/views/About'
  export default {
    name: 'App',
    components: {
      Home,
      About
    },
    data() {
      return {
        //
      }
    }
  }
</script>