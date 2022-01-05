import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ({ store, redirect }) {
  if (!store.getters['isAuthenticated']) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged", auth, user);
      if (user) {
        store.commit("login", user);
      } else {
        return redirect('/login');
      }
    });

  }
}