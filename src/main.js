import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App";
import router from "./utils/router";
import "./assets/style.scss";
import { tooltip } from './utils/tooltip';

const app = createApp(App);
app.directive("tooltip", tooltip);
app.use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/js/dist/tooltip";
import "bootstrap-icons/font/bootstrap-icons.css";
