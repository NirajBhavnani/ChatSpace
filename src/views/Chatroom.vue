<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { auth } from "@/firebase/config";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";

export default {
  components: {
    Navbar,
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