<template>
  <div class="countryVideo">
    <h2 class="countryVideo__title">La vidéo</h2>
    <h2 class="countryVideo__subtitle">Cliquez sur la vidéo pour la lancer</h2>
    <video @click="videoShow()" ref="video" class="countryVideo__content">
      <source src="../../assets/videos/blackPanthers.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  methods: {
    videoShow() {
      const $video = this.$refs.video;
      if ($video.paused) {
        $video.play();
      } else {
        $video.pause();
      }
    }
  }
};
</script>

<style lang="scss">
.countryVideo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  &__content {
    max-height: 100vh;
    width: 90%;
    margin-top: 20px;
    @include medium {
      width: 80%;
    }
  }
  &__title {
    font-size: 20px;

    font-weight: 900;
    text-transform: uppercase;
    @include medium {
      font-size: 40px;
    }
  }
}
</style>