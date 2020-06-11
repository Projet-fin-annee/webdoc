<template>
  <div class="summary">
    <p class="summary__text" @click="isOpen = !isOpen">SOMMAIRE</p>
    <div class="summary__menu" :class="isOpen ? 'open' : 'close'">
      <img
        class="summary__close"
        @click="isOpen = !isOpen"
        src="../assets/icons/close.svg"
        alt="close menu"
      />
      <nav class="summary__links">
        <ul class="summary__items">
          <li class="summary__item" v-for="(item,index) in menuList" :key="index">
            <router-link :to="{path:item.router}">{{item.name}}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      menuList: [
        { name: "ACCUEIL", router: "/" },
        { name: "L'HISTOIRE DES MOUVEMENTS", router: "/movements" },
        { name: "CARTE DES PROTESTATIONS", router: "/worldMap" },
        { name: "CONCLUSION", router: "/conclusion" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../scss/style.scss";

.summary {
  margin-top: 30px;
  &__text {
    color: $primary-color;
    padding: 10px 0;
    border-top: 1px solid $primary-color;
    border-bottom: 1px solid $primary-color;
    cursor: pointer;
    width: 100px;
    transition: 0.6s color;

    &:hover {
      color: $neutral-white;
    }
    @include medium {
      position: absolute;
      top: 30px;
      left: 80px;
    }
  }
  &__menu {
    transition: 0.4s all ease-in-out;
    position: absolute;
    background-color: $primary-color;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateX(-100%);
    visibility: hidden;
    text-align: left;
    @include flexCenter;
    width: 100%;
    height: 100vh;
    @include medium {
      width: 300px;
      height: 100vh;
    }
    &.close {
      opacity: 0;
      transform: translateX(-100%);
      visibility: hidden;
    }
    &.open {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
  &__links {
    height: 40vh;
  }
  &__items {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>