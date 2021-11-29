import { ref } from "vue";
import { getDocumentWithId } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      post.value = await getDocumentWithId("posts", id);
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, load };
};

export default getPost;
