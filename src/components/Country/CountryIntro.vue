<template >
  <div class="countryIntro">
    <div class="countryIntro__titles">
      <h2 class="countryIntro__title">{{countryData.title}}</h2>
      <h2 class="countryIntro__stroke">{{countryData.title}}</h2>
    </div>
    <div class="countryIntro__details">
      <img
        v-if="countryData.imageTwo"
        :src="'http://custom-x5lq.frb.io/src/uploads/image/' + countryData.imageTwo "
        alt="image intro"
      />
      <p class="countryIntro__text">{{countryData.textOne}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countryData: Object
  }
};
</script>

<style lang="scss">
.countryIntro {
  min-height: 100vh;
  padding-top: 110px;
  &__titles {
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 900;
    position: relative;
  }
  &__title {
    @include large {
      color: $neutral-white;
    }
  }
  &__stroke {
    position: absolute;
    top: 20px;
    left: 80px;
    color: transparent;
    -webkit-text-stroke: 1px $primary-color;
  }
  &__details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @include large {
      margin-top: 180px;
    }
  }

  &__text {
    text-align: left;
    @include large {
      font-size: 20px;
      width: 30%;
      line-height: 30px;
    }
  }
}
</style>