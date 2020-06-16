<template>
  <div class="videoMovement">
    <transition name="isVisible">
      <div class="videoMovement__container" v-show="showVideo">
        <video autoplay id="videoMov">
          <source :src="require(`@/assets/videos/${videos}`)" type="video/mp4" />
        </video>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    videos: String
  },
  data() {
    return {
      showVideo: true
    };
  },
  created() {
    setTimeout(() => (this.showVideo = false), 17000);
  }
};
</script>

<style lang="scss">
.videoMovement {
  z-index: 5;
  position: fixed;
  width: 100%;
  max-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  &__container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.89);
  }
  video#videoMov {
    width: 100%;
  }
}

.isVisible-leave-active {
  transition: all 1s ease-in-out;
}
.isVisible-leave-to {
  opacity: 0;
}
</style>