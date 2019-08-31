<template>
  <div>
    <div v-for="todo in allTodos" 
      v-bind:key="todo.id"
      
    >
      <span v-on:click="finishTodo(todo.id)">
        <b v-bind:class='{"is_finished":todo.finished}'>{{todo.todo}}</b> <br>
      </span>
      <span v-on:click="delTodo(todo.id)">xxx</span>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  data() {
    return {
      todo: "",
    }
  },
  methods: {
    ...mapActions(["fetchTodos", "changeTodoStatus", "deleteTodo"]),
    finishTodo(todoID){
      this.changeTodoStatus(todoID);
    },
    delTodo(todoID){
      this.deleteTodo(todoID);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
  .is_finished {
    background: #35495e;
    color: aliceblue;
  }
</style>