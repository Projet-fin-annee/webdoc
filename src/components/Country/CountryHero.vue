<template>
  <div class="countryHero">
    <img
      v-if="countryData.imageBackground"
      :src="'https://custom-x5lq.frb.io/src/uploads/image/' + countryData.imageBackground "
      alt="cover hero image"
      class="countryHero__cover"
    />

    <div class="countryHero__container">
      <div class="countryHero__details">
        <h1 class="countryHero__country">{{countryData.country}}</h1>
        <p class="countryHero__hastag">{{countryData.htag}}</p>
      </div>
      <p class="countryHero__victims">{{countryData.victimsName}} #RIP</p>
    </div>
    <div class="countryHero__next">
      <div class="countryHero__bar"></div>
      <p class="countryHero__discover">découvrir</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    countryData: Object
  },
  mounted() {
    gsap.from(".countryHero__cover", 1, {
      filter: "grayscale(100%)",
      delay: 2
    });
    gsap.from(".countryHero__country", 1, {
      textStroke: "2px white",
      color: "transparent",
      delay: 2
    });
  }
};
</script>

<style lang="scss">
.countryHero {
  height: 100vh;
  width: 100%;
  position: relative;

  &__cover {
    width: 100%;
    height: 100vh;

    object-fit: cover;
  }
  &__container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    @include large {
      margin-top: 35vh;
    }
  }
  &__details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__country {
    @include large {
      font-size: 120px;
      font-weight: 900;
    }
  }
  &__hastag {
    color: $primary-color;
    text-transform: uppercase;
  }
  &__victims {
    text-align: left;
    max-width: 800px;
    @include large {
      margin-top: 40px;
      font-size: 18px;
      line-height: 24px;
    }
  }
  &__next {
    position: absolute;
    bottom: 100px;
    transform: rotate(-90deg);
    justify-content: center;
    width: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  &__bar {
    width: 60px;
    height: 4px;
    background-color: $primary-color;
    margin-right: 14px;
  }
}
</style>