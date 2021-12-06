import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { db } from "../firebase/config";

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = query(
    collection(db, collectionName),
    orderBy("createdAt", "asc")
  );
  onSnapshot(
    collectionRef,
    (snap) => {
      let result = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && result.push({ ...doc.data(), id: doc.id });
      });
      documents.value = result;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch the data";
    }
  );

  return { documents, error  };
};

export default getCollection;
