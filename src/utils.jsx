import { store } from "./store/index.js";
import { loginUser } from "./features/auth/userSlice.js";

export const userHandle = (data) => {
  store.dispatch(loginUser(data));
};
