const app = Vue.createApp({
  data() {
    return {
      title: "The end of fucking world",
      author: "Gon",
      age: "21",
    };
  },
  methods: {
    changeTitle(name) {
      this.title = name;
    },
  },
});

app.mount("#app");
