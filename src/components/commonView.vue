<template>
    <div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "CommonView",
  beforeCreate() {
    console.log("before common");
  },
  created() {
    console.log("load common");
  }
};
</script>
<style scoped>
</style>
