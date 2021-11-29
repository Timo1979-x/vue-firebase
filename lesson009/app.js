console.log("hello, Vue2");

const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45
    };
  },
  methods: {
    changeTitle(t) {
      this.title = t;
    }
  }
});

app.mount("#app");
