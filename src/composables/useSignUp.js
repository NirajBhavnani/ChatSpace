import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null; //reset error value

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);

    if (!res) {
      throw new Error("Could not complete the sign up");
    }

    // For updating displayName
    await res.user.updateProfile({ displayName });
    error.value = null; //reset error value

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignUp = () => {
  return { error, signUp };
};

export default useSignUp;
