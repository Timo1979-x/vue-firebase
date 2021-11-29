const app = Vue.createApp({
  data() {
    return {
      url: "https://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        { title: "name of the wind", author: "patrick rothfuss", img:'1.jpg' },
        { title: "the way of kings", author: "brandon sanderson", img:'2.jpg' },
        { title: "the final empire", author: "brandon sanderson", img:'3.jpg' },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");