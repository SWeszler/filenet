<template>
  <div>
    <p>Your Profile</p>

    <b-field grouped>
      <p class="control">
        <b-button @click="signout">Sign Out</b-button>
      </p>
    </b-field>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export default {
  middleware: "auth",
  layout: "empty",
  methods: {
    signout() {
      signOut(auth)
        .then(() => {
          this.$store.commit("signout");
          this.$router.push("/login");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>