<template>
  <div class="countryHero">
    <img
      v-if="countryData.imageBackground"
      :src="'http://custom-x5lq.frb.io/src/uploads/image/' + countryData.imageBackground "
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
    justify-content: center;
    @include large {
      margin-top: 35vh;
      justify-content: initial;
    }
  }
  &__details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__country {
    font-size: 60px;
    font-weight: 900;
    @include large {
      font-size: 120px;
    }
  }
  &__hastag {
    color: $primary-color;
    margin-top: 8px;
  }
  &__victims {
    text-align: left;
    line-height: 24px;
    max-width: 80%;
    margin-top: 20px;
    @include large {
      margin-top: 40px;
      font-size: 18px;
      line-height: 24px;
    }
  }
  &__next {
    display: none;
    @include large {
      bottom: 100px;
      position: absolute;
      transform: rotate(-90deg);
      justify-content: center;
      width: 100%;
      display: flex;
      align-items: center;
      text-transform: uppercase;
    }
  }
  &__bar {
    width: 40px;
    height: 3px;
    background-color: $primary-color;
    margin-right: 14px;
    @include medium {
      width: 60px;
      height: 3px;
    }
  }
}
</style>