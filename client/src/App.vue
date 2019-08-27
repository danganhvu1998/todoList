<template>
  <div id="app">
    <UserInfo />
    <h1>Register</h1>
    <Register />
    <br><br>
    <h1>Login</h1>
    <Login />
  </div>
</template>

<script>
import Register from "./components/Register";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo"
export default {
  name: 'app',
  components: {
    Register,
    Login,
    UserInfo,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
