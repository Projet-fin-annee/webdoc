<template>
  <div class="soundButton" @click="notListened = !notListened">
    <div
      class="soundButton__container"
      :class="notListened ? 'notSound' : 'okaySound'"
    >
      <div class="soundButton__bar bar1"></div>
      <div class="soundButton__bar soundButton__bar--small bar2"></div>
      <div class="soundButton__bar bar3"></div>
      <div class="soundButton__bar soundButton__bar--small bar4"></div>
      <div class="soundButton__bar bar5"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notListened: false
    };
  }
};
</script>

<style lang="scss">
@import '../scss/style.scss';

.soundButton {
  position: absolute;
  bottom: 40px;
  right: 80px;
  width: 36px;
  height: 36px;
  border: 1px solid $primary-color;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  .notSound {
    border: 2px solid red;
  }
  .okaySound {
    border: none;
  }

  @include medium {
    width: 42px;
    height: 42px;
  }

  &__container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 70%;
  }

  &__bar {
    background-color: $light-grey;
    width: 3px;
    height: 12px;
    border-radius: 2px;

    @include medium {
      height: 16px;
    }
    &--small {
      height: 8px;
    }
  }

  .bar1 {
    animation: soundAnimate infinite 1.2s ease-in-out;
  }
  .bar2 {
    animation: soundAnimate infinite 1.7s ease-in-out;
  }
  .bar3 {
    animation: soundAnimate infinite 2.3s ease-in-out;
  }
  .bar4 {
    animation: soundAnimate infinite 0.6s ease-in-out;
  }
  .bar5 {
    animation: soundAnimate infinite 1.8s ease-in-out;
  }
}

@keyframes soundAnimate {
  50% {
    height: 2px;
  }
}
</style>
