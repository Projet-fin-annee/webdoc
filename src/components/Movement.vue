<template>
  <div class="movement">
    <router-link :to="path">
      <img :src="image" alt="image movement" class="movement__image" />
    </router-link>
    <div class="movement__details">
      <p class="movement__date">{{ date }}</p>
      <p class="movement__chapter">{{ chapter }}</p>
      <h2 class="movement__title">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["path", "image", "date", "chapter", "title"]
};
</script>

<style lang="scss">
@import "../scss/style.scss";

.movement {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh / 3);
  opacity: 1;
  overflow: hidden;
  @include medium {
    width: calc(100% / 3);
    height: 100vh;
    opacity: 0.6;
    transition: 0.6s all;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  a {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  &__image {
    position: relative;
    width: 100%;
    min-height: 100%;
    opacity: 0.6;
    @include medium {
      opacity: 0.7;
    }
  }
  &__details {
    width: 80%;
    position: absolute;
    color: white;
    @include medium {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: 300px;
    }
  }
  &__date {
    font-size: 16px;
    @include medium {
      font-size: 24px;
    }
  }
  &__chapter {
    margin-top: 12px;
    font-size: 36px;
    font-weight: bold;
    @include medium {
      font-size: 80px;
    }
  }
  &__title {
    margin-top: 12px;
    font-size: 18px;
    font-weight: bold;
    @include medium {
      font-size: 28px;
      line-height: 37px;
      height: 100px;
    }
  }
}
</style>