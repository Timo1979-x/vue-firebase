import { ref } from "vue";
import { auth, onAuthStateChanged } from "../firebase/config";

const user = ref(auth.currentUser);

onAuthStateChanged((_user) => {
  console.log("User state change. current state is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
