<template>
  <div class="button">
    <button :class="type" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    disabled: Boolean
  },
  methods: {}
};
</script>

<style lang="scss">
button {
  padding: 8px 17px;
  border: none;
  color: $neutral-white;
  background-color: $primary-color;
  border: 1px solid $primary-color;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 30px rgba(255, 126, 126, 0.2);
  }

  @include medium {
    padding: 15px 32px;
    border: 3px solid $primary-color;
  }
  &.outline {
    background-color: transparent;
    border: 1px solid $primary-color;
    color: $neutral-white;

    @include medium {
      border: 3px solid $primary-color;
    }
  }
}
</style>
