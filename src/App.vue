<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./scss/style.scss";

#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: $neutral-white;
}
</style>
