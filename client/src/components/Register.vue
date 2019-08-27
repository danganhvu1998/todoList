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
      username: "conmaxau@gmail.com",
      password: "hahahahaha"
    };
  },
  methods :{
    async onRegister(e){
      e.preventDefault();
      
      /*const response = await axios.post(
        "http://localhost:8000/api/register",
        {"email": this.username, "name": "Dang Vu", "password": this.password}
      );*/
      
      axios.post(
        "http://localhost:8000/api/register",{
          "email": this.username, 
          "name": "Dang Vu", 
          "password": this.password
        })
        .then( response => {
          console.log(response.data)
        })
        .catch( error => {
          console.log(error.response.data)
        });
    }
  }
}
</script>

<style scoped>

</style>