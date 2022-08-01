import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const login = async (email, password) => {
  error.value = null; //reset error value

  try {
    const res = await auth.signInWithEmailAndPassword(email, password);

    if (!res) {
      throw new Error("Authentication failed");
    }
    error.value = null; //reset error value
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
