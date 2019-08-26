<template>
  <div>
    <hr>
    <div>
      <form @submit="onRegister">
        <input type="text" v-model="username" placeholder="Username"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <input type="submit" value="Register">
      </form>
    </div>
    <hr>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods :{
    async onRegister(e){
      e.preventDefault();
      console.log(this.username, this.password);
      const response = await axios.post(
        "http://localhost:8000/api/register",
        {"username": this.username, "password": this.password}
      );
      console.log(response.data);
    }
  }
}
</script>

<style scoped>

</style>