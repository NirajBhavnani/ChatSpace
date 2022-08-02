import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { auth } from "@/firebase/config";

let app;

// this solves the problem when we try to redirect from chatroom to any other page and user is logged out
// So now, user is always logged in until logout button is clicked
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
