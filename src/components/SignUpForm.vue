<template>
  <form @submit.prevent="handleSignUp">
    <input
      type="text"
      required
      placeholder="Display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "../composables/useSignUp";

export default {
  setup() {
    const { error, signUp } = useSignUp();

    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSignUp = async () => {
      await signUp(email.value, password.value, displayName.value);
      console.log("User signed in successfully");
    };

    return { displayName, email, password, handleSignUp, error };
  },
};
</script>

<style>
</style>