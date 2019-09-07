<template>
  <div>
    <hr>
    <div>
      <form @submit="onLogin">
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <input type="submit" :value='$t("login")'>
      </form>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "conmaxau@gmail.com",
      password: "hahahahaha"
    };
  },
  methods :{
    ...mapActions(["login"]),
    onLogin(e){
      e.preventDefault();
      let userInfo = {
        email: this.email,
        password: this.password
      };
      this.login(userInfo);
    }
  }
}
</script>

<style scoped>

</style>