<template >
  <div class="countryIntro">
    <div class="countryIntro__titles">
      <h2 class="countryIntro__title">{{countryData.title}}</h2>
      <h2 class="countryIntro__stroke">{{countryData.title}}</h2>
    </div>
    <div class="countryIntro__details">
      <img
        v-if="countryData.imageTwo"
        :src="'https://custom-x5lq.frb.io/src/uploads/image/' + countryData.imageTwo "
        alt="image intro"
        class="countryIntro__image"
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
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 900;
    @include medium {
      font-size: 50px;
      position: relative;
    }
  }
  &__title {
    @include large {
      color: $neutral-white;
    }
  }
  &__stroke {
    display: none;
    @include medium {
      position: absolute;
      display: block;
      top: 20px;
      left: 80px;
      color: transparent;
      -webkit-text-stroke: 1px $primary-color;
    }
  }

  &__details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    @include large {
      margin-top: 180px;
      flex-direction: row;
    }
  }
  &__image {
    transform: rotate(-14deg);
  }

  &__text {
    text-align: left;
    line-height: 24px;
    width: 80%;
    @include large {
      font-size: 20px;
      width: 30%;
      line-height: 30px;
    }
  }
}
</style>