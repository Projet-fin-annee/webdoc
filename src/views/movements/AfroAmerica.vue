<template>
  <div class="afroAmerica">
    <TimelineBar>
      <TimelineInfo
        v-for="info in infos"
        :key="info.id"
        :date="info.date"
        @click.native="currentInfo=info.id"
        :class="currentInfo == info.id ? 'active' : ''"
      ></TimelineInfo>
    </TimelineBar>
    <transition name="fade">
      <TextStroke type="pinkStroke" v-if="currentInfo == 1">
        <span class="pink">Mouvement Afro-Américain des droits civiques</span>
        visait à établir une
        <span class="pink">réelle égalité de droits civiques</span>
        pour les
        <span class="pink">Noirs américains</span>en abolissant
        <span class="pink">la législation qui instaurait la ségrégation</span>
        raciale aux États-Unis d'Amérique.
      </TextStroke>
    </transition>
    <transition name="fade">
      <TextStroke type="pinkStroke" v-if="currentInfo == 2">
        La première grande victoire est enregistrée
        <span
          class="pink"
        >, sur le registre légal, par l'arrêt de la Cour suprême de 1954 dans Brown v. Board of Education, déclarant anti-constitutionnelle la</span>
        <span class="white">ségrégation raciale dans les écoles publiques.</span>
      </TextStroke>
    </transition>
    <transition name="fade">
      <TextStroke type="pinkStroke" v-if="currentInfo == 3">
        L'année suivante, le
        <span class="pink">boycott des bus de Montgomery</span>
        est déclenché à la
        <span class="pink">suite de l'arrestation de Rosa Parks</span>
        , qui refusait de laisser son siège, dans un bus, à un Blanc.
      </TextStroke>
    </transition>
    <transition name="fade">
      <TextStroke type="pinkStroke" v-if="currentInfo == 4">
        En 1956, la Cour suprême déclare
        <span class="pink">la ségrégation raciale dans les bus</span>
        , en Alabama,
        <span class="pink">anti-constitutionnelle</span>
      </TextStroke>
    </transition>
    <transition name="fade">
      <TextStroke type="whiteStroke" v-if="currentInfo == 5">
        Autour de 1966, l'émergence du mouvement
        <span
          class="white"
        >Black Power, globalement actif de 1966 à 1975, radicalise la lutte pour les droits civiques,</span>
        et conduit à l'élaboration d'une
        <span
          class="white"
        >lutte pour la dignité raciale, l'autonomie politique et économique, et l'émancipation de la tutelle des Blancs.</span>
      </TextStroke>
    </transition>
    <NavbarDesktop class="fixed" currentPage="L'HISTOIRE DES MOUVEMENTS"></NavbarDesktop>
    <NavbarMobile></NavbarMobile>
  </div>
</template>

<script>
import TextStroke from "@/components/TextStroke.vue";
import TimelineBar from "@/components/Timeline/TimelineBar.vue";
import TimelineInfo from "@/components/Timeline/TimelineInfo.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import NavbarDesktop from "@/components/NavbarDesktop.vue";

export default {
  components: {
    TextStroke,
    TimelineBar,
    TimelineInfo,
    NavbarDesktop,
    NavbarMobile
  },

  data() {
    return {
      currentInfo: 1,
      infos: [
        {
          id: "1",
          date: "1954"
        },
        {
          id: "2",
          date: "1954"
        },
        {
          id: "3",
          date: "1955"
        },
        {
          id: "4",
          date: "1956"
        },
        {
          id: "5",
          date: "1966"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.afroAmerica {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../../assets/background2.png");
  overflow-y: hidden;
  background-attachment: fixed;
}
.fixed {
  position: fixed;
}
.fade-enter-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
</style>
