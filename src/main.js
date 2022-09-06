import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./assets/sass/app.scss";

const app = createApp(App)
    .use(router);

app.mount("#app");
