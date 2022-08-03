import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { auth } from "@/firebase/config";

// Route guard -> auth guard since authentication is required to enter chatroom
// In route guard, 3 arguments are passed in automatically by vue-router
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

// Adding another Route guard to redirect already logged in user to chatroom
const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser;
  // if user is logged in
  if (user) {
    next({ name: "Chatroom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
