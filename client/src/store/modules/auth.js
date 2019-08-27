import axios from "axios"

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
        dispatch("userInfo");
      })
      .catch( error => {
        console.log(error.response.data.errors)
      });
  },

  userInfo({commit}){
    let config = {
      headers: {
        Accept: "application/json",
        Authorization: state.token_type + " " + state.access_token
      }
    }
    axios.get("http://localhost:8000/api/user", config)
    .then( response => {
      console.log("User Infomation", response.data)
      commit("userInfo", response.data);
    })
    .catch( error => {
      console.log(error.response.data.errors)
    });
  }
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations 
};