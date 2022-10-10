<template>
  <v-container>
    <v-row justify-content="center" class="mt-1">
      <v-col cols="6" md="3" sm="4" v-for="(client, i) in clients" :key="i">
        <v-card class="elevation-1 mx-2 card align-center" max-width="280">
          <v-card-actions>
            <v-avatar class="center mt-12">
              <v-img :src="client.img"></v-img>
            </v-avatar>
          </v-card-actions>
          <v-card-text
            class="subtitle-2 font-weight-bold darken-4--text mt-8 text-center"
          >
            {{ client.title }}
          </v-card-text>
          <v-card-text class="caption mt-n8 grey--text text-center">{{
            client.subtitle
          }}</v-card-text>

          <v-card-text class="caption mt-2 text-center">
            <!-- <div class="text-center"> -->
            <v-rating
              class="center my-n9"
              small
              v-model="client.rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
            ></v-rating>
            <!-- </div> -->
            {{ client.comment }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ClientsPage",
  data: () => ({
    clients: [
      {
        id: "1",
        img: "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-4.png",
        title: "Kareem Benji",
        subtitle: "CPO on Maqua",
        rating: 4.5,
        comment:
          "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
      },
      {
        id: "2",
        img: "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-2.png",
        title: "Severus KEY",
        subtitle: "CPO on eCards",
        rating: 5.0,
        comment: "I like it.........!!",
      },
      {
        id: "3",
        img: "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-3.png",
        title: "AAED Idea Pro",
        subtitle: "Hacker Pro",
        rating: 3.5,
        comment:
          "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. ",
      },
      {
        id: "3",
        img: "https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-5.png",
        title: "AAED Idea Pro",
        subtitle: "Hacker Pro",
        rating: 3.5,
        comment:
          "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. ",
      },
    ],
  }),
  components: {},
};
</script>
