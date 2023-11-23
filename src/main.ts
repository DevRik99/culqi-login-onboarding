import { createApp } from "vue";
import "./assets/styles/main.css";
import App from "./App.vue";
import router from "./router/router";
const app = createApp(App);
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
app.use(router);
app.use(VueAwesomePaginate);
app.component("skeletor", Skeletor);
app.mount("#app");
