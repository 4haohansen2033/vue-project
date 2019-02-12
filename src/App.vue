<template>
  <div class="container">
    <!-- <Login/> -->
    <!-- <Home/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./views/login/login.vue";
import Home from "./views/home/home.vue";
export default {
  name: "app",
  components: {
    Login,
    Home
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>
