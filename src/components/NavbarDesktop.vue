<template>
    <nav class="navbarDesktop">
        <ul class="navbarDesktop__items">
          <li class="navbarDesktop__item" v-for="(item,index) in menuList" :key="index" >
            <router-link :class="item.name == currentPage ? 'active' : ''" :to="{path:item.router}">{{item.name}}</router-link>
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
   props: ["currentPage"]
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
    background-color: rgba(0, 0, 0, 0.580);
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
  a.active{
    color: $primary-color;
    font-weight: bold;
  }
}
</style>