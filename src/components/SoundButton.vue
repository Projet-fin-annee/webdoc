<template>
  <div class="soundButton" @click="mutedSound()">
    <div class="soundButton__container">
      <div class="soundButton__bar bar1" :class="songListened ? 'okaySound' : 'notSound'"></div>
      <div class="soundButton__bar bar2" :class="songListened ? 'okaySound' : 'notSound'"></div>
      <div class="soundButton__bar bar3" :class="songListened ? 'okaySound' : 'notSound'"></div>
      <div class="soundButton__bar bar4" :class="songListened ? 'okaySound' : 'notSound'"></div>
      <div class="soundButton__bar bar5" :class="songListened ? 'okaySound' : 'notSound'"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songListened: true
    };
  },
  methods: {
    playPause(elem) {
      if (elem.muted == false) {
        elem.muted = true;
        elem.pause();
      } else {
        elem.muted = false;
        elem.play();
      }
    },
    mutedSound() {
      this.songListened = !this.songListened;
      document
        .querySelectorAll("video, audio")
        .forEach(elem => this.playPause(elem));
    }
  }
};
</script>

<style lang="scss">
@import "../scss/style.scss";

.soundButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border: 1px solid $primary-color;
  z-index: 5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  @include medium {
    width: 42px;
    height: 42px;
    bottom: 40px;
    right: 80px;
  }

  &__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    height: 70%;
  }

  &__bar {
    background-color: $light-grey;
    width: 3px;
    height: 12px;
    border-radius: 2px;

    @include medium {
      height: 16px;
    }
    &:nth-child(2n) {
      height: 8px;
    }
  }

  .bar1.okaySound {
    animation: soundAnimate infinite 1.2s ease-in-out;
  }
  .bar2.okaySound {
    animation: soundAnimate infinite 1.7s ease-in-out;
  }
  .bar3.okaySound {
    animation: soundAnimate infinite 2.3s ease-in-out;
  }
  .bar4.okaySound {
    animation: soundAnimate infinite 0.6s ease-in-out;
  }
  .bar5.okaySound {
    animation: soundAnimate infinite 1.8s ease-in-out;
  }
}

@keyframes soundAnimate {
  50% {
    height: 2px;
  }
}
</style>
