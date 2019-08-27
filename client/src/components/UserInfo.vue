<template>
  <div>
    Loged In As: <b>{{username}}</b>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserInfo",
  computed: mapGetters(["username"]),
}
</script>

<style scoped>

</style>