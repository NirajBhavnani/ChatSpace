<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";

export default {
  components: {
    Navbar,
    ChatForm,
    ChatWindow,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    // watch fires the function when a specific value is changed
    // auto redirect to homescreen when logged out
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
</style>