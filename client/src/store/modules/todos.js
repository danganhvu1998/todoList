import axios from "axios"
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import auth from "./auth"

Vue.use(VueCookies)

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async uploadTodo({dispatch}, todo){
    let config = await dispatch("authHeaderMaker");
    axios.post("http://localhost:8000/api/todos", {todo: todo}, config)
    .then( response => {
      console.log("Upload Todo", response.data)
      dispatch("fetchTodos");
    })
    .catch( error => {
      console.log(error.response)
    });
  },

  async fetchTodos({commit, dispatch}){
    let config = await dispatch("authHeaderMaker");
    axios.get("http://localhost:8000/api/todos", config)
    .then(response => {
      console.log("Fetch Todo", response.data)
      commit("setTodos", response.data);
    })
    .catch( error => {
      console.log(error.response)
    });
  },

  async changeTodoStatus({dispatch}, todoID){
    let config = await dispatch("authHeaderMaker");
    axios.patch("http://localhost:8000/api/todo/"+todoID, {}, config)
    .then( response => {
      dispatch("fetchTodos");
    })
    .catch( error => {
      console.log(error.response)
    });
  },

  async deleteTodo({dispatch}, todoID){
    let config = await dispatch("authHeaderMaker");
    axios.post("http://localhost:8000/api/todo/delete", {todo_id: todoID}, config)
    .then( response => {
      dispatch("fetchTodos");
    })
    .catch( error => {
      console.log(error.response)
    });
  },
};

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
};

export default {
  state,
  getters,
  actions,
  mutations 
};