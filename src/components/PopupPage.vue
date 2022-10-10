<template>
  <v-row justify="end">
    <v-col cols="auto">
      <v-dialog transition="dialog-middle-transition" max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <!--  -->
          <v-btn
            text
            icon
            small
            color="red accent-5"
            width="30"
            height="30"
            class="mr-4 mt-2"
          >
            <v-badge color="red accent-5" content="0">
              <v-icon> mdi-heart-outline </v-icon>
            </v-badge>
          </v-btn>
          <!--  -->
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
            icon
            small
            color="green accent-5"
            width="30"
            height="30"
            class="mr-4 mt-2"
          >
            <v-badge color="green accent-5" :content="bagItemscount">
              <v-icon> mdi-cart-outline </v-icon>
            </v-badge>
          </v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="green accent-5" dark flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="subtitle-1 font-weight-bold">
                Shopping Cart
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-row class="mt-2">
                <v-col cols="12">
                  <h4 v-if="cartContent.length === 0" class="text-center">
                    Your cart is empty, try to Add stuff...!!
                  </h4>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text>
              <v-row
                class="mb-2"
                v-for="thing in cartContent"
                :key="thing.id"
                align="center"
              >
                <v-col cols="3" class="card">
                  <v-avatar height="100" width="100">
                    <v-img :src="thing.img" contain></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="4" class="mt-7">
                  <div class="ml-4">
                    <h4 class="mb-1">{{ thing.title }}</h4>
                    <h5>Quantity : {{ thing.quantity }}</h5>
                  </div>
                </v-col>
                <v-col cols="5" class="mt-7">
                  <div class="ml-3">
                    <h4 class="ml-7 mb-1">${{ thing.price }}</h4>
                    <v-btn
                      class="card"
                      text
                      color="green accent-5"
                      v-on:click="inc(thing)"
                      icon
                      small
                    >
                      <v-icon small>mdi-plus</v-icon>
                    </v-btn>

                    <v-btn
                      class="card"
                      text
                      color="green accent-5"
                      v-on:click="dec(thing)"
                      icon
                      small
                    >
                      <v-icon small>mdi-minus</v-icon>
                    </v-btn>

                    <v-btn
                      class="card"
                      text
                      color="green accent-5"
                      v-on:click="removeThing(thing.id)"
                      icon
                      small
                    >
                      <v-icon small>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-divider v-if="cartContent.length > 0"></v-divider>
              <v-row class="my-1" v-if="cartContent.length > 0"
                ><v-col cols="6"
                  ><div class="mt-3">
                    <h2 class="mb-1">Total</h2>
                    <h5>Total articles : {{ itemTotalAmount }}</h5>
                  </div>
                </v-col>

                <v-col cols="6">
                  <div class="mt-6">
                    <h2 class="mb-1 text-right">${{ cartTotalAmount }}</h2>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-end" v-if="cartContent.length < 0">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PopupPage",

  computed: {
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cartContent) {
        total =
          total +
          this.cartContent[item].quantity * this.cartContent[item].price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cartContent) {
        itemTotal = itemTotal + this.cartContent[item].quantity;
      }
      return itemTotal;
    },
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
    cartContent() {
      return this.$store.state.cartItems;
    },
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
  },

  methods: {
    inc(thing) {
      // Info box Incrememnt button
      thing.quantity = thing.quantity + 1;
    },
    dec(thing, id) {
      // Info box Decrememnt button
      if (thing.quantity == 1) {
        this.removeThing(id);
      } else {
        thing.quantity = thing.quantity - 1;
      }
    },
    // Info box remove button
    removeThing(id) {
      this.$store.commit("outCart", id);
    },
  },

  components: {},

  data: () => ({
    //
    content: 0,
    // quan: 1,
  }),
  created() {
    this.content = this.bagItemscount;
  },
};
</script>
<style lang="scss">
</style>