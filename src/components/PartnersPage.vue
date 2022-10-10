<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3" sm="4" v-for="(partner, i) in partners" :key="i">
        <v-card flat>
          <v-card-actions
            ><v-img :src="partner.img" contain height="70" width="70"></v-img
          ></v-card-actions>
          <v-card-text class="text-center mt-n4">{{
            partner.title
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PartnersPage",
  components: {},
  data: () => ({
    partners: [
      {
        id: "1",
        img: "airbnb.png",
        title: "AirBnb",
      },
      {
        id: "2",
        img: "adidas.png",
        title: "Addidas",
      },
      {
        id: "3",
        img: "swords.png",
        title: "Swords",
      },
      {
        id: "4",
        img: "castle.png",
        title: "Castle",
      },
    ],
  }),
};
</script>
