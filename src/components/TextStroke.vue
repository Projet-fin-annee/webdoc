<template>
  <div class="movement__text">
    <p :class="type">
      <slot></slot>
    </p>
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
.movement__text {
  color: transparent;
  margin: 0px 30px 30px 30px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 14px;
  text-align: left;
  font-size: 24px;
  line-height: 34px;
  @include medium {
    margin: 0px 50px 50px 50px;
    font-size: 60px;
    line-height: 80px;
  }
  @include large {
    margin: 0px 70px 70px 70px;
    font-size: 80px;
    line-height: 100px;
  }
  .whiteStroke {
    -webkit-text-stroke: 0.6px $neutral-white;
    @include medium {
      -webkit-text-stroke: 2px $neutral-white;
    }
  }
  .pinkStroke {
    -webkit-text-stroke: 0.6px $primary-color;
    @include medium {
      -webkit-text-stroke: 2px $primary-color;
    }
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
