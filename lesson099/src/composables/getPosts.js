import { ref } from "vue";
import { orderedCollection } from "../firebase/config";
// import { collection } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      let p = await orderedCollection("posts", "created");
      posts.value = p;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
