<template>
  <form @submit.prevent="signIn">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");

    const signIn = () => {
      console.log(email, password);
    };

    return { email, password, signIn };
  },
};
</script>

<style>
</style>