<template>
  <div class="countrySpeech">
    <h1 class="countrySpeech__title">{{countryData.citationOne}}</h1>
    <div class="countrySpeech__back"></div>
    <div class="countrySpeech__container">
      <img
        v-if="countryData.imageOne"
        :src="'http://custom-x5lq.frb.io/uploads/image/' + countryData.imageOne "
        alt="image country"
        class="countrySpeech__image"
      />
      <div class="countrySpeech__infos">
        <p class="countrySpeech__text">{{countryData.textIntro}}</p>
        <div class="countrySpeech__details">
          <h2 class="countrySpeech__subtitle">{{countryData.titleSpeech}}</h2>
          <div class="countrySpeech__listen">
            <audio ref="audio" src="../../assets/audio/typing.mp3"></audio>
            <img
              :src="require(`@/assets/icons/${svg}`)"
              @click="playPause()"
              alt="svg play"
              class="countrySpeech__audio"
            />
            <img src="../../assets/icons/hear.svg" alt="svg hearphone" />
          </div>
        </div>
        <p class="countrySpeech__quote">{{countryData.citationSpeech}}</p>
        <p class="countrySpeech__author">{{countryData.person}}</p>
      </div>
    </div>
    <IndicatorScroll></IndicatorScroll>
  </div>
</template>

<script>
import IndicatorScroll from "./IndicatorScroll.vue";
{
  IndicatorScroll;
}
export default {
  data() {
    return {
      svg: "play.svg"
    };
  },
  props: {
    countryData: Object
  },
  methods: {
    playPause() {
      const el = this.$refs.audio;
      if (el.paused) {
        el.play();
        this.svg = "pause.svg";
      } else {
        el.pause();
        this.svg = "play.svg";
      }
    }
  }
};
</script>

<style lang="scss">
.countrySpeech {
  min-height: 100vh;
  position: relative;

  @include large {
    padding-top: 120px;
  }
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
  &__audio {
    cursor: pointer;
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