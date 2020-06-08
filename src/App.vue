<template>
  <div id="app">
    <vue-page-transition name="overlay-right-full">
      <router-view />
    </vue-page-transition>
    <SoundButton></SoundButton>
  </div>
</template>

<script>
import SoundButton from "@/components/SoundButton.vue";

export default {
  components: {
    SoundButton
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
