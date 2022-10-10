<template>
  <v-container>
    <v-row justify-content="center">
      <v-col
        cols="6"
        md="3"
        sm="4"
        v-for="product in CardArray"
        :key="product.id"
      >
        <v-card class="card align-center rounded-lg mx-2" max-width="240">
          <v-img
            contain
            :src="product.img"
            max-height="300"
            max-width="240"
            class="img"
          ></v-img>
          <v-card-title class="subtitle-2"> {{ product.title }} </v-card-title>
          <v-card-subtitle class="caption grey--text">{{
            product.subtitle
          }}</v-card-subtitle>
          <v-card-title class="subtitle-2 mt-n4">
            ${{ product.price }}
            <v-spacer></v-spacer>
            <v-btn icon color="green accent-5" text @click="addtoCart(product)">
              <v-icon> mdi-shopping-outline </v-icon></v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["CardArray"],
  name: "ProductsPage",
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
    // products: [
    // {
    //   id: 1,
    //   img: "pr1.png",
    //   title: "Cabbage",
    //   subtitle: "1kg",
    //   price: "$13",
    // },
    // {
    //   id: 2,
    //   img: "pr2.png",
    //   title: "Perry's Ice Cream",
    //   subtitle: "1kg",
    //   price: "$23",
    // },
    // { id: 2, img: "pr3.png", title: "Potato", subtitle: "1kg", price: "$17" },
    // {
    //   id: 3,
    //   img: "pr4.png",
    //   title: "Bundle Pack",
    //   subtitle: "Potato, Papaya",
    //   price: "$40",
    // },
    // {
    //   id: 4,
    //   img: "pr5.png",
    //   title: "Oreo Biscuit",
    //   subtitle: "270GM",
    //   price: "$20",
    // },
    // { id: 5, img: "pr6.png", title: "Papaya", subtitle: "1kg", price: "$10" },
    // {
    //   id: 6,
    //   img: "p3.png",
    //   title: "Oreo Biscuit",
    //   subtitle: "270GM",
    //   price: "$20",
    // },
    // { id: 7, img: "pr3.png", title: "Papaya", subtitle: "1kg", price: "$10" },
    // ],
  }),
};
</script>
<style lang="scss">
.card:hover {
  transition: 0.2s ease;
  transform: scale(1.04);
}
.img {
  transition: 0.4s ease;
  transform: scale(1.08);
}
</style>
