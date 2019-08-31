<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="todo" placeholder="Todo">
      <input type="submit" value="Add">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      todo: "",
    }
  },
  methods: {
    ...mapActions(["uploadTodo"]),
    addTodo(e){
      e.preventDefault();
      this.uploadTodo(this.todo);
      this.todo = "";
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>