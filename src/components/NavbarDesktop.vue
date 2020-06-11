<template>
  <nav class="navbarDesktop">
    <div class="navbarDesktop__progressBar"></div>
    <ul class="navbarDesktop__items">
      <li class="navbarDesktop__item" v-for="(item,index) in menuList" :key="index">
        <router-link
          :class="item.name == currentPage ? 'active' : ''"
          :to="{path:item.router}"
        >{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { name: "ACCUEIL", router: "/" },
        { name: "L'HISTOIRE DES MOUVEMENTS", router: "/movements" },
        { name: "CARTE DES PROTESTATIONS", router: "/worldMap" },
        { name: "CONCLUSION", router: "/conclusion" }
      ]
    };
  },
  props: ["currentPage"],
  methods: {
    progressBarSize: function hello() {
      setTimeout(function() {
        const navBar = document.querySelector(".navbarDesktop__progressBar");
        const elemActive = document.querySelector(".active");
        let valueWidth = elemActive.offsetLeft + elemActive.offsetWidth;
        navBar.style.width = `${valueWidth}px`;
      }, 10);
    }
  },
  beforeMount() {
    this.progressBarSize();
  },
  mounted: function () {
    window.addEventListener('resize', this.progressBarSize)
  }
};
</script>

<style lang="scss">
@import "../scss/style.scss";

.navbarDesktop {
  display: none;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.58);
  @include large {
    display: block;
  }
  &__progressBar {
    height: 2px;
    background-color: $primary-color;
  }
  &__items {
    font-size: 14px;
    display: flex;
    height: 50px;
    width: 70%;
    align-items: center;
    justify-content: space-evenly;
  }
  a.active {
    color: $primary-color;
    font-weight: bold;
  }
}
</style>