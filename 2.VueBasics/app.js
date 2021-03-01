const app = Vue.createApp({
  data() {
    return {
      showbooks: true,
      href: "https://fb.com",
      books: [
        { title: "The end ", author: "gon", isFav: true },
        { title: "love you ", author: "tran", isFav: false },
        { title: "honey moon ", author: "be tran", isFav: true },
        { title: "honey moon ", author: "be tran", isFav: true },
      ],
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
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
    sum() {
      return this.books.length;
    },
  },
});

app.mount("#app");
