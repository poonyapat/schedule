<template>
  <v-app>
    <v-toolbar app class="blue-shadow-box-0" dense>
      <v-toolbar-items>
        
        <v-btn flat :to="{name: 'HomeView'}">
          <v-icon>home</v-icon>
          home
        </v-btn>
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