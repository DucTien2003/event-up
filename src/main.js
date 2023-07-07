import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/main.scss";

import "./assets/styles/tailwind.css";

import { registerGlobalComponent } from "./utils/globalComponents";

const app = createApp(App);

registerGlobalComponent(app);

app.use(router).mount("#app");
