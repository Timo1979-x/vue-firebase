import { ref } from "vue";
import { auth, onAuthStateChanged } from "../firebase/config";

const user = ref(auth.currentUser);

onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
