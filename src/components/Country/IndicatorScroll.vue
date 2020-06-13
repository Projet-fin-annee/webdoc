<template>
  <div class="indicatorScroll">
    <svg
      class="indicatorScroll__svg"
      width="241"
      height="65"
      viewBox="0 0 241 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 64C50.7004 -19.9913 189.048 -20.0087 240 64"
        stroke="#FF7E7E"
        stroke-width="0.5"
        stroke-dasharray="2 3"
      />
    </svg>
    <svg
      class="indicatorScroll__arrow"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.05469 0L11.9648 13.2865L22.875 0L23.9297 1.28579L11.9648 15.8866L0 1.28579L1.05469 0Z"
        fill="#FF7E7E"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.indicatorScroll {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translate(-50%);
  @include large {
    bottom: 80px;
  }
  &__svg {
    position: relative;
  }
  &__arrow {
    position: absolute;
    top: 40px;
    animation: slideUp 1.5s infinite ease-in;
    cursor: pointer;
  }
}

@keyframes slideUp {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(10px);
  }
}
</style>