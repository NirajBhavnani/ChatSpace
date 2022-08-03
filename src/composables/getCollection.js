import { firestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = firestore.collection(collectionName).orderBy("createdAt");

  // onSnapshot: How we setup a real-time listener to the firestore database
  // each time there's a change in the database, it sends us back a snap
  // and we fire a callback function when that happens and we get access to that snapshot
  // That snapshot contains all of the docs and the data of these docs
  const unsubscribe = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // if doc.data().createdAt check is not added then the app will use
        // a local version of the snapshot and timestamp when we make a change to the data
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      //if we get any error, then the second callback function will fire
      console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  // When any component mounts, onSnapshot is called every time, so to overcome this problem
  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsubscribe());
  });

  return { documents, error };
};

export default getCollection;
