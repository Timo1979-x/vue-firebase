const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, payload) {
      console.log(e, e.type);
      if (payload) {
        console.log(payload);
      }
    },
    handleMousemove(e) {
      // console.log(e, e.type);
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },
});

app.mount("#app");
