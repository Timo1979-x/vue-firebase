import { ref } from "vue";
import { getCollectionWithIds } from "../firebase/config";
// import { collection } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      let p = await getCollectionWithIds("posts");
      posts.value = p;
    } catch (err) {
      debugger;
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
