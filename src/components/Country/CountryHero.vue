<template>
  <div class="countryHero">
    <img src="../../assets/country/hero_us.png" alt="cover hero image" class="countryHero__cover" />

    <div class="countryHero__container">
      <div class="countryHero__details">
        <h1 class="countryHero__country">ETATS-UNIS</h1>
        <p class="countryHero__hastag">#LA SOURCE</p>
      </div>
      <p class="countryHero__victims">
        George Floyd, Breonna Taylor, Walter L. Scott, India Kager, Christofer Kimble, Michael Lee Marshall, Tiara Thomas, Roy Nelson, Bettie Jones, Michael Noel
        et tant d’autres. #RIP
      </p>
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