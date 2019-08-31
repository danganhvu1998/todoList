<template>
  <div>
    <span><button @click="userInfo()">Info Reload</button></span>
        <span><button @click="userLogout()">Log Out</button></span>
    <span><button @click="userLogoutAll()">Log Out All</button></span><br>
    <span>Loged In As: <b>{{username}}</b></span><br>
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserInfo",
  computed: mapGetters(["username"]),
  methods: {
    ...mapActions(["userInfo", "userLogout", "userLogoutAll"]),
  },
  created() {
    this.userInfo();
  }
}
</script>

<style scoped>

</style>