import { firestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collectionName) => {
  // this time we are declaring error inside the function
  // reason: we might use different collections in different positions in the website
  // and for each collection we need a new error
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null; //reset the error

    try {
      await firestore.collection(collectionName).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
    }
  };

  return { error, addDoc };
};

export default useCollection;
