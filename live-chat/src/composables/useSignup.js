import { updateProfile } from "@firebase/auth";
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "../firebase/config";

const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    let resp = await createUserWithEmailAndPassword(
      email,
      password,
      displayName
    );
    if (!resp) {
      throw new Error("Couldn't signup!");
    }
    await updateProfile(resp.user, { displayName });
    error.value = null;
    return resp;
  } catch (err) {
    console.error(err.message);
    error.value = err.message;
  }
};

const error = ref(null);

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
