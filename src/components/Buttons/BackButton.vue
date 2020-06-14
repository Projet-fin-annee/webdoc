<template>
  <div class="backButton">
    <img class="backButton__arrow" src="../../assets/icons/arrow-right.svg" alt="arrow right" />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.backButton {
  color: white;
  position: fixed;
  top: 40px;
  left: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
  @include medium {
    left: 80px;
  }
  &__arrow {
    padding-right: 12px;
  }
}
</style>
