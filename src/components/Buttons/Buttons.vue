<template>
  <div class="buttons">
    <router-link to="/introduction">
      <Button>
        Immersion
      </Button>
    </router-link>
    <router-link to="/movements">
      <Button type="outline">
        Histoire
      </Button>
    </router-link>
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
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
</style>