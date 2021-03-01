const app = Vue.createApp({
  data() {
    return {
      showbooks: true,
      title: "The end of fucking world",
      author: "Gon",
      age: "21",
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(name) {
      this.title = name;
    },
    showBooks() {
      this.showbooks = !this.showbooks;
    },
    handleMouse(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
