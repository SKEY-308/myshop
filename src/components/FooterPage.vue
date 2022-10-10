<template>
  <v-footer dark padless class="mb-n16">
    <v-card flat tile class="black white--text py-12 px-5" width="100%">
      <v-row>
        <v-col cols="12" sm="6" md="4" class="pa-16">
          <v-toolbar color="transparent" flat>
            <v-badge dot color="grey">
              <router-link to="/"
                ><v-img alt="1" src="1.png" width="30"
              /></router-link>
            </v-badge>

            <v-toolbar-title class="ml-4 green--text font-weight-medium">
              my</v-toolbar-title
            >
            <v-toolbar-title class="font-weight-medium">Shop</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pt-0">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
              fab
              outlined
              small
            >
              <v-icon size="17">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-card-text class="white--text pt-0">
            <h3>About</h3>
          </v-card-text>
          <v-card-text class="grey--text"> How it Works</v-card-text>
          <v-card-text class="grey--text mt-n4"> Our Programs </v-card-text>
          <v-card-text class="grey--text mt-n4"> Promotions </v-card-text>
          <v-card-text class="grey--text mt-n4"> Refer A Friend </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-card-text class="white--text pt-0">
            <h3>Delivery</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Cost on Delevery </v-card-text>
          <v-card-text class="grey--text mt-n4"> Payment Method </v-card-text>
          <v-card-text class="grey--text mt-n4"> Delivery Astus </v-card-text>
          <v-card-text class="grey--text mt-n4"> Returns </v-card-text>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card-text class="white--text pt-0">
            <h3>Contact</h3>
          </v-card-text>
          <v-card-text class="grey--text"> AAE IdeaPro </v-card-text>
          <v-card-text class="grey--text mt-n4">
            216 / C EAST Road
          </v-card-text>
          <v-card-text class="grey--text mt-n4"> aae.idapro.com </v-card-text>
          <v-card-text class="grey--text mt-n4"> -B8254552214 </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterPage",
  data: () => ({
    icons: ["mdi-apple", "mdi-google-plus", "mdi-twitter", "mdi-facebook"],
  }),

  components: {},
};
</script>
