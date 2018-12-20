<template>
  <v-app>
    <v-toolbar class="blue-shadow-box-0" dense>

      <v-toolbar-title flat class="mx-2">
        <router-link :to="{name: 'HomeView'}">
          <v-icon>home</v-icon>
          home
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat :to="{name: 'InputView'}">
          input
        </v-btn>

        <v-btn flat :to="{name: 'OutputView'}">
          output
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content class="main">
      <router-view />
    </v-content>
  </v-app>
</template>


<style src="./App.css">

</style>