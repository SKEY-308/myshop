import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoPage: [],
    cartItems: [],
    items: [
      {
        id: 0,
        img: "pr1.png",
        title: "Cabbage",
        subtitle: "1kg",
        price: "13",
        quantity: 1

      },
      {
        id: 1,
        img: "pr2.png",
        title: "Perry's Ice Cream",
        subtitle: "1kg",
        price: "23",
        quantity: 1
      },
      { id: 2, img: "pr3.png", title: "Potato", subtitle: "1kg", price: "17", quantity: 1 },
      {
        id: 3,
        img: "pr4.png",
        title: "Bundle Pack",
        subtitle: "Potato, Papaya",
        price: "40",
        quantity: 1
      },
      {
        id: 4,
        img: "pr5.png",
        title: "Oreo Biscuit",
        subtitle: "270GM",
        price: "20",
        quantity: 1
      },
      { id: 5, img: "pr6.png", title: "Papaya", subtitle: "1kg", price: "10", quantity: 1 },
      {
        id: 6,
        img: "p3.png",
        title: "Oreo Biscuit",
        subtitle: "270GM",
        price: "20",
        quantity: 1
      },
      { id: 7, img: "pr3.png", title: "Papaya", subtitle: "1kg", price: "10", quantity: 1 },
      {
        id: 8,
        img: "p1.png",
        title: "Medium Box",
        subtitle: "Tomato, Cabbage, Oil, Cauliflower",
        price: "55",
        quantity: 1
      },
      {
        id: 9,
        img: "p2.png",
        title: "Big Pack",
        subtitle: "Tomato, Cabbage, Oil, Cauliflower",
        price: "65",
        quantity: 1
      },
      {
        id: 10,
        img: "pr1.png",
        title: "Small",
        subtitle: "Tomato, Cabbage, Oil,Cauliflower ",
        price: "75",
        quantity: 1
      },
      {
        id: 11,
        img: "p4.png",
        title: "Medium Box",
        subtitle: "Tomato, Cabbage, Oil,Cauliflower",
        price: "85",
        quantity: 1
      },
      {
        id: 12,
        img: "p5.png",
        title: "Medium Box",
        subtitle: "Tomato, Cabbage, Oil,Cauliflower",
        price: "95",
        quantity: 1
      },
      {
        id: 13,
        img: "p6.png",
        title: "Medium Box",
        subtitle: "Tomato, Cabbage, Oil,Cauliflower",
        price: "105",
        quantity: 1
      },
      {
        id: 14,
        img: "p4.png",
        title: "Medium Box",
        subtitle: "Tomato, Cabbage, Oil,Cauliflower",
        price: "525",
        quantity: 1
      },
      {
        id: 15,
        img: "p5.png",
        title: "Medium Box",
        subtitle: "Tomato, Cabbage, Oil,Cauliflower",
        price: "554",
        quantity: 1
      },
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state) {  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0) {
        return state.cartItems.reduce((a, b) => {
          return (b.price == null) ? a : a + b.price
        }, 0)
      }
    },
    infoLength(state) { // Info Component
      if (state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      // let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
      return state.infoPage.push(n)
    }
  },
  actions: {
  },
  modules: {
  }
})
