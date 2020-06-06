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
        <ul>
          <li class="summary__item" v-for="item in menuList" :key="item">
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
      margin-left: 80px;
    }
  }
  &__menu {
    position: absolute;
    background-color: $primary-color;
    top: 0;
    text-align: left;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    @include medium {
      width: 300px;
      height: 300px;
    }

    &.close {
      display: none;
    }
    &.open {
      display: flex;
    }
  }
  &__item {
    padding-bottom: 15px;
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>