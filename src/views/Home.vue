<template>
  <div class="home">
    <VideoHome></VideoHome>
    <Summary></Summary>
    <SoundButton></SoundButton>
    <div class="home__container">
      <div class="home__titles">
        <h1 class="home__mainTitle">“CAN WE <span>BREATHE</span> NOW ?”</h1>
        <h3 class="home__subTitle">#BLACKLIVESMATTER</h3>
      </div>
      <div class="home__userContainer">
        <Buttons></Buttons>
        <div class="home__userExperience">
          <p class="home__userExperienceTitle">POUR UNE MEILLEURE EXPERIENCE</p>
          <div class="home__userExperienceIcons">
            <img class="home__userExperienceIcon" src="../assets/icons/desktop.svg" alt="desktopIcons">
            <img class="home__userExperienceIcon" src="../assets/icons/cask.svg" alt="caskIcons">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import VideoHome from "@/components/VideoHome.vue";
import Summary from "@/components/Summary.vue";
import Buttons from "@/components/Buttons/Buttons.vue";
import SoundButton from "@/components/SoundButton.vue";

export default {
  name: "Home",
  components: {
    VideoHome,
    Buttons,
    Summary,
    SoundButton
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
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
  &__titles{
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
  }
  &__mainTitle{
    font-size: 22px;
    & span{
      color: $primary-color;
    }
    @include medium {
      font-size: 42px;
    }
    @include large {
      font-size: 60px;
    }
  }
  &__subTitle{
    font-size: 16px;
    color: $light-grey;
    @include medium {
      font-size: 20px;
    }
    @include large {
      font-size: 24px;
    }
  }
  &__userContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__userExperience{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 80px 0px;

  }
  &__userExperienceIcons{
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    margin-top: 16px;
  }
  &__userExperienceIcon{
    width: 20px;
    @include medium {
      width: 26px;
    }
    @include large {
      width: 32px;
    }
  }
}
</style>
