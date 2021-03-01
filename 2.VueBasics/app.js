const app = Vue.createApp({
  data() {
    return {
      showbooks: true,
      title: "The end of fucking world",
      author: "Gon",
      age: "21",
    };
  },
  methods: {
    changeTitle(name) {
      this.title = name;
    },
    showBooks() {
      this.showbooks = !this.showbooks;
    },
  },
});

app.mount("#app");
