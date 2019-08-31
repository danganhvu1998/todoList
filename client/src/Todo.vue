<template>
  <div id="app">
    <UserInfo />
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import UserInfo from "./components/auth/UserInfo"
import AddTodo from "./components/todos/AddTodo"
import Todos from "./components/todos/Todos"
export default {
  name: 'Todo',
  components: {
    UserInfo,
    AddTodo,
    Todos,
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
