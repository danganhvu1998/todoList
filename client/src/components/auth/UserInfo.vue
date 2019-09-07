<template>
  <div>
    <span><button @click="userInfo(); fetchTodos()">{{$t("infoReload")}}</button></span>
    <span><button @click="userLogout()">{{$t("logout")}}</button></span>
    <span><button @click="userLogoutAll()">{{$t("logoutAll")}}</button></span><br>
    <button v-for="language in languages" v-bind:key="language.title" @click="changeLocale(language.language)">
      {{language.title}}
    </button>
    <span>Loged In As: <b>{{username}}</b></span><br>
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import i18n from "./../../i18n";
export default {
  name: "UserInfo",
  computed: mapGetters(["username"]),
  methods: {
    ...mapActions(["userInfo", "userLogout", "userLogoutAll", "fetchTodos"]),
    changeLocale(locale){
      i18n.locale = locale;
    }
  },
  data() {
    return{
      languages: [
        {language: "vi", title: "VI"},
        {language: "en", title: "EN"},
      ]
    }
  },
  created() {
    this.userInfo();
  }
}
</script>

<style scoped>
  
</style>