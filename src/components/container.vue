<template>
    <div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "Container",
  created() {
    console.log("load container");
  }
};
</script>
<style scoped>
</style>
