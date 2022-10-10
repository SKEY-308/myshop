<template>
  <v-card color="grey lighten-4" flat class="mt-6 py-4">
    <v-card-title class="subtitle-2">Popular Buddle Pack</v-card-title>
    <v-container>
      <v-row justify-content="center">
        <v-col cols="6" md="3" sm="4" v-for="pack in CardArray" :key="pack.id">
          <v-card class="card align-center rounded-lg mx-2" max-width="240">
            <v-img
              contain
              :src="pack.img"
              max-height="300"
              max-width="240"
              class="img"
            ></v-img>
            <v-card-title class="subtitle-2"> {{ pack.title }} </v-card-title>
            <v-card-subtitle class="caption grey--text">{{
              pack.subtitle
            }}</v-card-subtitle>
            <v-card-title class="subtitle-2 mt-n4">
              ${{ pack.price }}
              <v-spacer></v-spacer>
              <v-btn icon color="green accent-5" text @click="addtoCart(pack)">
                <v-icon> mdi-shopping-outline </v-icon></v-btn
              >
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["CardArray"],
  name: "BuddlesPage",
  components: {},
  methods: {
    addtoCart(it) {
      //check if already in array
      for (let i = 0; i < this.$store.state.cartItems.length; i++) {
        if (this.$store.state.cartItems[i].id === it.id) {
          return this.$store.state.cartItems[i].quantity++;
        }
      }
      this.$store.commit("inCart", it);
    },
    // sendInfo(it) {
    //   this.$store.commit("addtoInfo", it);
    // },
  },
  data: () => ({
    packs: [
      // {
      //   id: 1,
      //   img: "p1.png",
      //   title: "Medium Box",
      //   subtitle: "Tomato, Cabbage, Oil, Cauliflower",
      //   price: "$55",
      // },
      // {
      //   id: 2,
      //   img: "p2.png",
      //   title: "Big Pack",
      //   subtitle: "Tomato, Cabbage, Oil, Cauliflower",
      //   price: "$65",
      // },
      // {
      //   id: 3,
      //   img: "pr1.png",
      //   title: "Small",
      //   subtitle: "Tomato, Cabbage, Oil,Cauliflower ",
      //   price: "$75",
      // },
      // {
      //   id: 4,
      //   img: "p4.png",
      //   title: "Medium Box",
      //   subtitle: "Tomato, Cabbage, Oil,Cauliflower",
      //   price: "$85",
      // },
      // {
      //   id: 5,
      //   img: "p5.png",
      //   title: "Medium Box",
      //   subtitle: "Tomato, Cabbage, Oil,Cauliflower",
      //   price: "$95",
      // },
      // {
      //   id: 6,
      //   img: "p6.png",
      //   title: "Medium Box",
      //   subtitle: "Tomato, Cabbage, Oil,Cauliflower",
      //   price: "$105",
      // },
      // {
      //   id: 4,
      //   img: "p4.png",
      //   title: "Medium Box",
      //   subtitle: "Tomato, Cabbage, Oil,Cauliflower",
      //   price: "$525",
      // },
      // {
      //   id: 5,
      //   img: "p5.png",
      //   title: "Medium Box",
      //   subtitle: "Tomato, Cabbage, Oil,Cauliflower",
      //   price: "$554",
      // },
    ],
  }),
};
</script>
