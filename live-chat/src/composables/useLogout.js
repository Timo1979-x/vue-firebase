import { ref } from "vue";
import { signOut } from "../firebase/config";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    let resp = await signOut();
    console.log(`signout: ${resp}`);
  } catch (err) {
    console.error(err.message);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
