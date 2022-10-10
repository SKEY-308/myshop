<template>
  <v-app-bar app flat color="white">
    <v-badge dot color="grey">
      <router-link to="/"><v-img alt="1" src="1.png" width="30" /></router-link>
    </v-badge>

    <v-toolbar-title class="ml-4 green--text font-weight-medium">
      <router-link to="/" class="text2"> my</router-link></v-toolbar-title
    >
    <v-toolbar-title class="font-weight-medium"
      ><router-link to="/" class="text">Shop</router-link></v-toolbar-title
    >

    <v-spacer></v-spacer>
    <!-- <v-app-bar-nav-icon> -->

    <!-- <v-btn
      text
      icon
      small
      color="red accent-5"
      width="30"
      height="30"
      class="mt-2"
    >
      <v-badge color="red accent-5" content="3">
        <v-icon> mdi-cards-heart-outline </v-icon>
      </v-badge>
    </v-btn> -->
    <!--  -->

    <PopupPage />

    <!-- </v-app-bar-nav-icon> -->

    <v-app-bar-title
      class="
        mx-3
        mt-2
        font-weight-regular
        subtitle-2
        grey--text
        d-none d-sm-flex d-md-flex
      "
      >Hello, Severus ..!!</v-app-bar-title
    >
    <v-app-bar-nav-icon class="mx-auto">
      <v-badge
        overlap
        bottom
        dot
        color="green accent-4"
        offset-x="12"
        offset-y="12"
      >
        <v-avatar max-height="48" max-width="50">
          <v-img
            alt="1"
            src="https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-4.png"
          />
        </v-avatar>
      </v-badge>
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import PopupPage from "./PopupPage";
export default {
  name: "NavBarMenu",

  components: {
    PopupPage,
  },

  data: () => ({
    btnItems: [
      {
        color: "red accent-5",
        icon: "mdi-cards-heart-outline",
        content: "3",
      },
      {
        color: "green accent-5",
        icon: "mdi-cart-outline",
        content: "4",
      },
      // {
      //   color: "teal accent-5",
      //   icon: "mdi-bell-outline",
      //   content: "9",
      // },
    ],
  }),
};
</script>
<style lang="scss">
.right {
  margin-right: -68%;
}
.text {
  text-decoration: none !important;
  color: #2c3539 !important;
}
.text2 {
  text-decoration: none !important;
  color: green !important;
}
</style>
