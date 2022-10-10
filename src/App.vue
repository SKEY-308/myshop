<template>
  <v-app>
    <!--  -->
    <NavBarMenu />
    <!--  -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBarMenu from "./components/NavBarMenu";
export default {
  name: "App",

  components: {
    NavBarMenu,
  },

  data: () => ({
    //
  }),
};
</script>

