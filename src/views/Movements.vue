<template>
  <div class="movements">
    <Movement v-for="detail in detailsMovement" :key="detail.id"
      :path="detail.path"
      :image="detail.image"
      :date="detail.date"
      :chapter="detail.chapter"
      :title="detail.title"
    ></Movement>
    <NavbarDesktop currentPage="L'HISTOIRE DES MOUVEMENTS"></NavbarDesktop>
    <NavbarMobile></NavbarMobile>
  </div>
</template>

<script>
import NavbarMobile from "@/components/NavbarMobile.vue";
import NavbarDesktop from "@/components/NavbarDesktop.vue";
import Movement from "@/components/Movement.vue";

export default {
  name: "Movements",
  components: {
    Movement,
    NavbarDesktop,
    NavbarMobile
  },
  data() {
    return {
      detailsMovement: [{
        id: "afm",
        path: "/movements/AfroAmerica",
        image: "movementafro.png",
        date: "1954 - 1968",
        chapter: "I",
        title: "Mouvement Afro-Américain des droits civiques"
      },
      {
        id: "bp",
        path: "/movements/BlackPanthers",
        image: "blackpanthers.png",
        date: "1966 - 1981",
        chapter: "II",
        title: "Black Panthers"
      },
      {
        id: "blm",
        path: "/movements/BlackLivesMatter",
        image: "blm.png",
        date: "2013 - aujourd'hui",
        chapter: "III",
        title: "BLACK LIVES MATTER"
      }
      ]
    };
  }
};
</script>

<style lang='scss'>
@import "../scss/style.scss";
a {
  padding: 0;
}
.movements {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-image: url("../assets/texture.png");
  @include backgroundCenter;
  @include large {
    flex-direction: row;
  }
}
</style>