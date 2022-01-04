<template>
  <div class="columns is-centered is-vcentered is-mobile is-fullheight">
    <div class="column is-half-desktop">
      <div>
        <b-field label="Email">
          <b-input type="email" v-model="email" maxlength="30"> </b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal> </b-input>
        </b-field>

        <b-field grouped>
          <p class="control">
            <b-button @click="login">Login</b-button>
          </p>

          <p class="control">
            <b-button @click="signup">Sign Up</b-button>
          </p>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default {
  name: "LoginPage",
  layout: "empty",
  data() {
    return {
      password: null,
      email: null,
    };
  },
  components: {
    Card,
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.$store.commit('login', user);
          this.$router.push('/profile');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    signup() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },
};
</script>

<style scoped>
.is-fullheight {
  height: 100vh;
}
</style>