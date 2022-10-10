<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto rounded-lg"
          max-height="100%"
          max-width="100%"
          flat
        >
          <v-img alt="cover2" src="cover2.png">
            <v-card-title class="top ml-4">
              <h4>Order From Here</h4>
            </v-card-title>
            <v-card-title class="ml-4 mt-n8">
              <h5>Your favorite ingredients...!!</h5>
            </v-card-title>
            <v-card-title class="ml-4">
              <h6 class="green--text">#Free Delivery</h6>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="5" md="5" lg="4">
                  <v-text-field
                    v-model="searchkey"
                    type="search"
                    autocomplete="on"
                    dense
                    solo
                    flat
                    filled
                    class="d-none d-sm-none d-md-flex ml-10"
                    append-icon="mdi-magnify"
                    label="Search your daily ingredients"
                    rounded
                    outlined
                    success
                    placeholder="Placeholder"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--  -->
    <v-toolbar flat>
      <v-toolbar-title class="subtitle-2"> Category </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn-toggle v-model="toggle_exclusive" color="grey lighten-5"> -->
      <v-btn icon color="green" text large>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon color="green" text v-model="toggle_exclusive" large>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <!-- </v-btn-toggle> -->
    </v-toolbar>
    <!--  -->
    <!-- Category -->
    <CategoryPage />
    <!-- Category -->
    <!--  -->
    <v-toolbar flat>
      <v-toolbar-title class="subtitle-2"> Popular Products </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="green" text small>See All</v-btn>
    </v-toolbar>
    <!--  -->
    <!-- Popular Product  -->
    <ProductsPage :CardArray="filteredList" />
    <!-- Popular Product -->

    <!-- Popular Buddle Pack -->
    <BuddlesPage :CardArray="filteredList" />
    <!-- Popular Buddle Pack -->

    <!-- Clients -->
    <v-toolbar flat>
      <v-toolbar-title class="subtitle-2 center"
        >What's Our Client Say...!!</v-toolbar-title
      >
    </v-toolbar>
    <!-- --------------------------- -->
    <ClientsPage />
    <!-- Clients -->
    <!-- Trust Partner -->
    <v-toolbar flat>
      <v-toolbar-title class="subtitle-2 my-2"
        >Our Trusted Partner...!!</v-toolbar-title
      >
    </v-toolbar>
    <!-- ---------------- -->
    <PartnersPage />
    <!--  -->
    <!--  -->

    <v-card
      flat
      color="grey lighten-4"
      class="rounded-xl mt-14 mx-10 pa-4 mb-16"
      height="350"
    >
      <v-row>
        <v-col cols="12" sm="5" md="5">
          <v-card
            class="rounded-xl mt-n16 ml-10"
            outlined
            flat
            height="450"
            width="200"
          >
            <v-img src="mobile.png"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="5" class="ml-2">
          <h2 class="mt-16">Download App</h2>
          <p class="caption font-weight-regular text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Provident sequi esse tempore maiores quasi quia non.<br />
            Itaque laboriosam dicta nostrum accusantium assumenda,<br />
            vitae ab ut vel tenetur minima natus commodi!
          </p>
          <v-btn color="black" dark class="mb-10" small>
            <v-icon color="white" left>mdi-apple</v-icon>
            App Store
          </v-btn>
          <v-btn color="black" dark class="ml-4 mb-10" small>
            <v-icon color="white" left>mdi-google-play</v-icon>
            Play Store
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!--  -->
    <!-- Footer -->
    <FooterPage />
    <!-- Footer -->
  </v-container>
</template>

<script>
import CategoryPage from "./CategoryPage";
import PartnersPage from "./PartnersPage";
import ProductsPage from "./ProductsPage";
import BuddlesPage from "./BuddlesPage";
import ClientsPage from "./ClientsPage";
import FooterPage from "./FooterPage";
export default {
  name: "HomeViewPage",

  data: () => ({
    //
    toggle_exclusive: undefined,
    cards: [],
    searchkey: "",
    showCards: 8,
  }),
  created() {
    this.cards = this.it;
  },
  computed: {
    filteredList() {
      return this.cards.filter((cards) => {
        return cards.title.toLowerCase().includes(this.searchkey.toLowerCase());
      });
    },
    it() {
      return this.$store.state.items;
    },
    slicedCards() {
      return this.cards.slice();
    },
  },
  methods: {},

  components: {
    CategoryPage,
    ProductsPage,
    BuddlesPage,
    ClientsPage,
    PartnersPage,
    FooterPage,
  },
};
</script >

<style lang="scss">
.top {
  margin-top: 9%;
}
.left {
  margin-left: -7%;
}
.center {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>