import { ref } from "vue";
import { signInWithEmailAndPassword } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const resp = await signInWithEmailAndPassword(email, password);
    console.log(resp);
    error.value = null;
    return resp;
  } catch (err) {
    console.error(err.message);
    error.value = `Incorrect login credentials: ${err.message}`;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
