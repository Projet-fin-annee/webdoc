<template>
  <div class="buttons">
    <Button>
      <router-link to="/">Immersion</router-link>
    </Button>
    <Button type="outline">
      <router-link to="/">Definitions</router-link>
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button
  }
};
</script>

<style lang="scss">
@import "../../scss/style.scss";
.buttons {
  display: flex;
  justify-content: space-evenly;
  width: 40%;
}
</style>