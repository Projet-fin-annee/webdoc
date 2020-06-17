<template>
  <div class="countryUprising">
    <h2 class="countryUprising__title">{{countryData.citationTwo}}</h2>
    <div class="countryUprising__details">
      <div class="countryUprising__texts">
        <p class="countryUprising__text">{{countryData.textTwo}}</p>
      </div>
      <div class="countryUprising__images">
        <img
          v-if="countryData.imageThree"
          :src="'http://custom-x5lq.frb.io/uploads/image/' + countryData.imageThree "
          alt="image uprising"
          class="countryUprising__image1"
        />
      </div>
    </div>
    <img
      src="../../assets/country/punch.png"
      alt="punch black lives matter logo"
      class="countryUprising__punch"
    />
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
.countryUprising {
  min-height: 100vh;
  position: relative;
  padding-top: 90px;
  overflow-x: hidden;
  @include medium {
    padding-top: 110px;
  }

  &__title {
    color: $primary-color;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 24px;
    @include large {
      font-size: 50px;
    }
  }
  &__details {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    @include large {
      align-items: initial;
      flex-direction: row;
      margin-top: 100px;
    }
  }
  &__texts {
    width: 80%;
    margin-top: 14px;
    text-align: left;
    line-height: 22px;
    @include medium {
      width: 30%;
      font-size: 20px;
      line-height: 30px;
    }
  }
  &__text {
    @include large {
      margin-bottom: 40px;
    }
  }
  &__images {
    width: 60%;
    @include medium {
      position: relative;
      height: auto;
      width: 100%;
      z-index: 2;
    }
  }

  &__punch {
    display: none;
    @include medium {
      position: absolute;
      top: 40px;
      right: -120px;
      transform: rotate(-40deg);
    }
  }
}
</style>