<template>
    <nav class="navbarDesktop">
        <ul class="navbarDesktop__items">
          <li class="navbarDesktop__item" v-for="(item,index) in menuList" :key="index">
            <router-link :to="{path:item.router}">{{item.name}}</router-link>
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
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';

.navbarDesktop{
  display: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 50px;
    background-color: black;
    opacity: 0.6;
  @include large{
    display: block;
  }
  &__items{
    display: flex;
    height: 100%;
    width: 70%;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>