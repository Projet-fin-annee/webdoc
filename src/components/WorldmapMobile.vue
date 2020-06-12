<template>
  <router-link :to="path">
    <div class="worldmapMobile">
      <img
        :src="require(`@/assets/${image}`)"
        class="worldmapMobile__image"
        alt="imageOfLandBackground"
      />
      <div class="worldmapMobile__details">
        <h2 class="worldmapMobile__country">{{ country }}</h2>
        <p class="worldmapMobile__hashtag">#{{ hashtag }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['path', 'image', 'country', 'hashtag']
};
</script>

<style lang="scss">
.worldmapMobile {
  @include flexCenter;
  height: calc(100vh / 3);
  width: 100%;
  background-color: black;
  overflow: hidden;

  @include large {
    display: none;
  }

  a {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  &__image {
    position: relative;
    transition: 0.6s all;
    width: 100%;
    min-height: 100%;
    opacity: 0.6;
    object-fit: cover;
    &:hover {
      transform: scale(1.2);
    }
  }
  &__details {
    position: absolute;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  &__country {
    font-weight: 900;
    font-size: 24px;
  }
  &__hashtag {
    color: $primary-color;
    font-size: 14px;
    text-transform: uppercase;
  }
}
</style>
