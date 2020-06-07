<template>
  <div id="app">
    <vue-page-transition name="overlay-right-full">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import './scss/style.scss';

#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: $neutral-white;
}
</style>
