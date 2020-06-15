<template>
  <div class="blackLivesMatter">
    <TimelineBar>
      <TimelineInfo
      v-for="info in infos"
      :key="info.id"
      :date="info.date"
      @click.native="currentInfo=info.id"
      :class="currentInfo == info.id ? 'active' : ''"
      >
    </TimelineInfo>
    </TimelineBar>
    <transition name="fade">
    <TextStroke type="pinkStroke" v-if="currentInfo == 1">
     13 JUILLET 2013 CRéation du <span class="pink">#BLACKLIVESMATTER </span>
     <span class="white">APPARU SUR TWITTER</span>
     suite a l’acquitement du meurtier de 
     <span class="pink">trayvon martin</span>
     en floride Black Lives Matter se veut multiracial, intersectionnel, homosexuel, sans leader, sans relais politique, ni religieux. 
     <span class="white">Afin que l’impunité des forces de l’ordre cesse</span>
    , Black Lives Matter dénonce les
    <span class="white">violences racistes.</span>
    </TextStroke>
    </transition>
    <transition name="fade">
    <TextStroke type="pinkStroke" v-if="currentInfo == 2">
      PREMIERE MARCHES ET MANIFESTATIONS DE RUES 
      <span class="white">INITIées dès la mort de michael brown</span>
    </TextStroke>
    </transition>
    <transition name="fade">
    <TextStroke type="pinkStroke" v-if="currentInfo == 3">
      LE MOUVEMENT BLACK LIVES MATTER APPORTE SOUTIEN AU PEUPLE PALESTINIEN FACE à ISRAEL
    </TextStroke>
    </transition>
    <transition name="fade">
    <TextStroke type="pinkStroke" v-if="currentInfo == 4">
      dans le cadre du Mois de l'histoire des Noirs , une 
      <span class="pink">exposition d'art d'un mois "Black Lives Matter" </span>
      . Le spectacle a présenté plus de 30 artistes multiculturels divers sur
      <span class="pink">un thème explorant l'égalité raciale et la justice.</span>
    </TextStroke>
    </transition>
    <transition name="fade">
    <TextStroke type="pinkStroke" v-if="currentInfo == 5">
      SUITE A LA MORT DE 
      <span class="pink">GEORGE FLOYD</span> LE MOUVEMENT
      <span class="pink">BLACK LIVES MATTER </span>
      S’EST EMPARé du mouvement Réclamant justice et respect.
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
import NavbarMobile from '@/components/NavbarMobile.vue';
import NavbarDesktop from '@/components/NavbarDesktop.vue';

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
          id: '1',
          date: '2013'
        },
        {
          id: '2',
          date: '2014'
        },
        {
          id: '3',
          date: '08.2014'
        },
        {
          id: '4',
          date: '2017'
        },
        {
          id: '5',
          date: '2020'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.blackLivesMatter {
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('../../assets/background2.png');
    overflow-y: hidden;
    background-attachment: fixed;
}
.fixed{
  position: fixed;
}
 .fade-enter-active {
  transition: opacity .8s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
</style>
  