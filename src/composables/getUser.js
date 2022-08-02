import { auth } from "@/firebase/config";
import { ref } from "vue";

// When the application first loads, if they're currently logged in then it will be the value
// If they're not then it will be null
const user = ref(auth.currentUser);

// using auth object to listen to authentication changes
auth.onAuthStateChanged((_user) => {
  console.log("User state changed. Current user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
