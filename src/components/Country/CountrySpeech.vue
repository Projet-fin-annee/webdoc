<template>
  <div class="countrySpeech">
    <h1 class="countrySpeech__title">{{countryData.citationOne}}</h1>
    <div class="countrySpeech__container">
      <img
        v-bind:src="'http://localhost:8081/uploads/image/' + countryData.imageOne "
        alt="image country"
        class="countrySpeech__image"
      />
      <div class="countrySpeech__infos">
        <p class="countrySpeech__text">{{countryData.textIntro}}</p>
        <div class="countrySpeech__details">
          <h2 class="countrySpeech__subtitle">{{countryData.titleSpeech}}</h2>
          <div class="countrySpeech__listen">
            <img src="../../assets/icons/play.svg" alt="svg play" />
            <img src="../../assets/icons/hear.svg" alt="svg hearphone" />
          </div>
        </div>
        <p class="countrySpeech__quote">{{countryData.citationSpeech}}</p>
        <p class="countrySpeech__author">{{countryData.person}}</p>
      </div>
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
.countrySpeech {
  min-height: 100vh;

  @include large {
    padding-top: 120px;
  }
  &__title {
    @include large {
      font-size: 50px;
      font-weight: bold;
    }
  }
  &__container {
    @include large {
      display: flex;
      margin-top: 40px;
      align-items: center;
    }
  }
  &__infos {
    text-align: left;
    @include large {
      width: 600px;
      margin-left: 180px;
    }
  }
  &__text {
    font-weight: bold;
    @include large {
      font-size: 20px;
    }
  }
  &__details {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
  }
  &__subtitle {
    color: $primary-color;
    @include large {
      font-size: 27px;
      width: 60%;
    }
  }
  &__listen {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 20%;
  }
  &__quote {
    span {
      text-decoration: underline;
    }
    @include large {
      margin-top: 20px;
      width: 60%;
      font-size: 18px;
      line-height: 30px;
    }
  }
  &__author {
    margin-top: 20px;
    color: $primary-color;
    font-weight: bold;
  }
}
</style>