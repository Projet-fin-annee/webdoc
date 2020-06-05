<template>
  <div class="home">
    <Buttons></Buttons>
  </div>
</template>

<script>
// @ is an alias to /src
import Buttons from "@/components/Buttons/Buttons.vue";

export default {
  name: "Home",
  components: {
    Buttons
  }
};
</script>

<style lang="scss">
@import "../scss/style.scss";

.home {
  background-image: url("../assets/home.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100vh;
  color: $neutral-white;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
