<template>
  <div id="app">
    <UserInfo />
    <Register />
    <br><br>
    <h1>{{ $t("login")}}</h1>
    <Login />
  </div>
</template>

<script>
import Register from "./components/auth/Register"
import Login from "./components/auth/Login";
import UserInfo from "./components/auth/UserInfo"
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
