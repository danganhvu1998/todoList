import Vuex from "vuex"
import Vue from "vue"
import auth from "./modules/auth"
import todos from "./modules/todos"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        todos,
    }
});