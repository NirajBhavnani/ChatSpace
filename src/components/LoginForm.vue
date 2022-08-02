<template>
  <form @submit.prevent="handleSignIn">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";

export default {
  // setup has always 1st argument as props and 2nd argument as context
  // context object contains the methods and properties
  setup(props, context) {
    // refs
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSignIn = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        // emitting custom event in CompositionAPI
        context.emit("login");
      }
    };

    return { email, password, handleSignIn, error };
  },
};
</script>

<style>
</style>