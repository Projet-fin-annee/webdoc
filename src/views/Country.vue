<template>
  <div class="country">
    <div class="country__back"></div>
    <BackButton>retour à la carte</BackButton>
    <CountrySpeech></CountrySpeech>
    <CountryIntro></CountryIntro>
    <IndicatorScroll></IndicatorScroll>
  </div>
</template>

<script>
import BackButton from "../components/Buttons/BackButton.vue";
import IndicatorScroll from "../components/Country/IndicatorScroll.vue";
import CountrySpeech from "@/components/Country/CountrySpeech.vue";
import CountryIntro from "@/components/Country/CountryIntro.vue";

export default {
  name: "Country",
  components: {
    CountrySpeech,
    BackButton,
    IndicatorScroll,
    CountryIntro
  }
};
</script>

<style lang="scss">
.country {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../assets/texture2.png");
  &__back {
    background-color: $primary-color;
    @include large {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(50%);
      width: 3px;
      height: 40px;
    }
  }
}
</style>