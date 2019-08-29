<template>
  <div>
    <hr>
    <div>
      <form @submit="onRegister">
        <input type="text" v-model="username" placeholder="Username"><br>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <input type="submit" value="Register">
      </form>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      username: "Dang Anh Vu",
      email: "conmaxau@gmail.com",
      password: "hahahahaha"
    };
  },
  methods :{
    ...mapActions(["register"]),
    async onRegister(e){
      e.preventDefault();
      let userInfo = {
        name: this.username,
        email: this.email,
        password: this.password
      }
      this.register(userInfo);
    }
  }
}
</script>

<style scoped>

</style>