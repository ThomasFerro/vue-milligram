import { createApp } from "vue";
import App from "./App.vue";
import VueMilligram from "./vue-milligram.plugin";

require("../node_modules/milligram/dist/milligram.min.css");

const app = createApp(App);
app.use(VueMilligram);

app.mount("#app");
