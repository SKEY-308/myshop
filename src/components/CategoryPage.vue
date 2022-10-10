<template>
  <!-- Category -->
  <v-item-group mandatory class="mt-n2">
    <v-container>
      <v-row justify-content="center">
        <v-col
          cols="4"
          md="2"
          sm="2"
          v-for="(category, i) in categories"
          :key="i"
        >
          <v-item v-slot="{ toggle, active }">
            <v-card
              @click="toggle"
              :color="active ? '#D5F0DB' : 'white'"
              class="d-flex align-center rounded-lg mx-2"
              dark
              max-height="180"
              max-width="100"
              flat
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item class="text-center">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          :alt="category.img"
                          :src="category.img"
                          max-height="80"
                          max-width="80"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'green--text' : 'black--text'"
                        class="caption mt-4"
                        >{{ category.title }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <!-- Category -->
</template>

<script>
export default {
  name: "CategoryPage",

  data: () => ({
    //

    categories: [
      {
        img: "01.png",
        title: "Meat & Fish",
      },
      {
        img: "02.png",
        title: "Vegetables",
      },
      {
        img: "3.png",
        title: "Medicine",
      },
      {
        img: "4.png",
        title: "Baby",
      },
      {
        img: "5.png",
        title: "Office",
      },
      {
        img: "6.png",
        title: "Beauty",
      },
    ],
  }),

  components: {},
};
</script>
