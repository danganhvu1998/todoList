import Vue from 'vue'
import App from './App.vue'
import Todo from './Todo.vue'
import store from './store'

Vue.config.productionTip = false

const NotFound = { template: '<p>Page not found</p>' }
const AuthPage = App;
const TodoPage = Todo;

const routes = {
  '/': AuthPage,
  '/todo': TodoPage,
}

new Vue({
  store,
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      //console.log(this.currentRoute);
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})