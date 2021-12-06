import { ref } from "@vue/reactivity";
import { addDocument } from "../firebase/config";

const useCollection = (collectionName) => {
  const error = ref(null);
  const addDoc = async (doc) => {
    error.value = null;
    try {
      await addDocument(collectionName, doc);
    } catch (error) {
      console.error(error.message);
      error.value = `could not send the message: ${error.message}`;
    }
  };
  return { error, addDoc };
};

export default useCollection;
