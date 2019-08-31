import axios from "axios"
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

const state = {
  username: "",
  email: "",
  token_type: "Bearer",
  access_token: "",
  refresh_token: "",
};

const getters = {
  username: state => state.username,
  email: state => state.email,
  token_type: state => state.token_type,
  access_token: state => state.access_token,
  refresh_token: state => state.refresh_token,
  token: state => state.token_type + " " + state.access_token,
};

const actions = {
  register({dispatch}, userInfo){
    axios.post(
      "http://localhost:8000/api/register",{
        "email": userInfo.email, 
        "name": userInfo.name, 
        "password": userInfo.password
      })
      .then( response => {
        console.log(response.data);
        dispatch("login", userInfo)
      })
      .catch( error => {
        console.log(error.response.data.errors)
      });
  },

  login({commit, dispatch}, userInfo) {
    console.log("Login", userInfo);
    axios.post(
      "http://localhost:8000/api/login",{
        "username": userInfo.email, 
        "password": userInfo.password
      })
      .then( response => {
        console.log(response.data)
        commit("tokenInfo", response.data);
        let authInfo = {
          token_type: response.data.token_type,
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
        $cookies.set("authInfo", authInfo, "365D" );
        dispatch("userInfo");
      })
      .catch( error => {
        console.log(error.response.data.errors)
      });
  },

  headerMaker(){
    let authInfo = $cookies.get("authInfo");
    let authToken = "";
    if(state.access_token == ""){
      authToken = authInfo.token_type + " " + authInfo.access_token;
    } else {
      authToken = state.token_type + " " + state.access_token;
    }
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: authToken,
      }
    }
    return config;
  },

  userInfo({commit, dispatch}){
    dispatch("headerMaker").then(res => {
      console.log("RES", res);
      let config = res;
      axios.get("http://localhost:8000/api/user", config)
      .then( response => {
        console.log("User Infomation", response.data)
        commit("userInfo", response.data);
        if(window.location.pathname == "/"){
          window.location = "/todo";
        }
      })
      .catch( error => {
        commit("userInfoDelete");
        console.log(error);
      });
    });
  },

  userLogout({commit, dispatch}){
    dispatch("headerMaker").then(res => {
      console.log("RES", res);
      let config = res;
      axios.post("http://localhost:8000/api/logout_current", {}, config)
      .then( response => {
        console.log("User Infomation", response.data)
        commit("userInfoDelete");
      })
      .catch( error => {
        console.log(error)
      });
    });
  }, 

  userLogoutAll({commit, dispatch}){
    dispatch("headerMaker").then(res => {
      console.log("RES", res);
      let config = res;
      axios.post("http://localhost:8000/api/logout_all", {}, config)
      .then( response => {
        console.log("User Infomation", response.data)
        commit("userInfoDelete");
      })
      .catch( error => {
        console.log(error)
      });
    });
  }, 
};

const mutations = {
  tokenInfo: (state, tokenInfo) => {
    state.token_type = tokenInfo.token_type;
    state.access_token = tokenInfo.access_token;
    state.refresh_token = tokenInfo.refresh_token;
  },

  userInfo: (state, userInfo) => {
    state.username = userInfo.name;
    state.email = userInfo.email;
  },

  userInfoDelete: (state) =>{
    state.token_type = "";
    state.access_token = "";
    state.refresh_token = "";
    state.username = "";
    state.email = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations 
};