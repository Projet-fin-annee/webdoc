<template>
  <div class="home">
    <VideoHome></VideoHome>
    <Summary></Summary>
    <Buttons></Buttons>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoHome from "@/components/VideoHome.vue";
import Summary from "@/components/Summary.vue";
import Buttons from "@/components/Buttons/Buttons.vue";

export default {
  name: "Home",
  components: {
    VideoHome,
    Buttons,
    Summary
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
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  @include medium {
    font-size: 16px;
  }
}
</style>
