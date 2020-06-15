<template>
  <div class="countryUprising">
    <h2 class="countryUprising__title">{{countryData.citationTwo}}</h2>
    <div class="countryUprising__details">
      <div class="countryUprising__texts">
        <p class="countryUprising__text">{{countryData.textTwo}}</p>
      </div>
      <div class="countryUprising__images">
        <img
          :src="'http://localhost:8081/uploads/image/' + countryData.imageThree "
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
  padding-top: 110px;
  position: relative;
  overflow-x: hidden;

  &__title {
    color: $primary-color;
    text-transform: uppercase;
    font-weight: 900;
    @include large {
      font-size: 50px;
    }
  }
  &__details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @include large {
      margin-top: 100px;
    }
  }
  &__texts {
    @include large {
      width: 30%;
      text-align: left;
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
    @include large {
      position: relative;
      height: auto;
      z-index: 2;
    }
  }

  &__punch {
    position: absolute;
    top: 40px;
    right: -120px;
    transform: rotate(-40deg);
  }
}
</style>