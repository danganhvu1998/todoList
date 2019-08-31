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
  async uploadTodo({commit, dispatch}, todo){
    let config = await dispatch("authHeaderMaker");
    console.log(config);
    axios.post("http://localhost:8000/api/todos", {todo: todo}, config)
    .then( response => {
      console.log("Upload Todo", response.data)
    })
    .catch( error => {
      console.log(error.response)
    });
  }
};

const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations 
};