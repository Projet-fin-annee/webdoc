<template>
  <div class="movement__text">
    <p :class="type"><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
};
</script>

<style lang="scss">
@import '../scss/style.scss';

.movement__text {
  color: transparent;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 14px;
  text-align: left;
  @include large {
    font-size: 80px;
  }
  .whiteStroke {
    -webkit-text-stroke: 2px $neutral-white;
  }
  .pinkStroke {
    -webkit-text-stroke: 2px $primary-color;
  }
  .white {
    color: $neutral-white;
    -webkit-text-stroke: 2px transparent;
  }
  .pink {
    color: $primary-color;
    -webkit-text-stroke: 2px transparent;
  }
}
</style>
