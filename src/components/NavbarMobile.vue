<template>
  <div class="navbarMobile">
    <p class="navbarMobile__text" @click="isOpen = !isOpen">MENU</p>
    <div class="navbarMobile__menu" :class="isOpen ? 'open' : 'close'">
      <img
        class="navbarMobile__close"
        @click="isOpen = !isOpen"
        src="../assets/icons/close.svg"
        alt="close menu"
      />
      <nav class="navbarMobile__links">
        <ul class="navbarMobile__items">
          <li
            class="navbarMobile__item"
            v-for="(item, index) in menuList"
            :key="index"
          >
            <router-link :to="{ path: item.router }">{{
              item.name
            }}</router-link>
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
        { name: 'ACCUEIL', router: '/' },
        { name: "L'HISTOIRE DES MOUVEMENTS", router: '/movements' },
        { name: 'CARTE DES PROTESTATIONS', router: '/worldMap' },
        { name: 'CONCLUSION', router: '/conclusion' }
      ]
    };
  }
};
</script>

<style lang="scss">
.navbarMobile {
  position: fixed;
  top: 0;
  z-index: 6;
  width: 100%;
  @include large {
    display: none;
  }
  &__text {
    position: absolute;
    top: 0;
    right: 0;
    color: $neutral-white;
    padding: 20px 0;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background-color: $primary-color;
  }
  &__menu {
    transition: 0.8s all ease-in-out;
    position: absolute;
    background-color: $primary-color;
    opacity: 1;
    visibility: hidden;
    text-align: left;
    @include flexCenter;
    width: 100%;
    height: 100vh;
    &.close {
      transform: translate(100%, -100%);
      border-radius: 100%;
      visibility: hidden;
    }
    &.open {
      transform: translate(0);
      border-radius: 0;
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
