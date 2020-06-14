<template>
  <div class="blackPanthers">
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
    <TextStroke type="whiteStroke" v-if="currentInfo == 1">
     CRéations du mouvement suite a la<span class="white">mort de malcom x militantiste noir américain</span>
     leurs but de <span class="white">combattre les injustices</span>
      que subissent les  afro-AMéricainS AVEC UN programme en dix points a appelé à la cessation immédiate des
      <span class="white">brutalités policières</span>; emploi pour les Afro-Américains; et la terre, le logement et la justice pour tous. 
    </TextStroke>
    <TextStroke type="pinkStroke" v-if="currentInfo == 2">
      Le FBI deploie des
      <span class="pink">mesures de répressions</span>Déstinées aux communistes contre l’ORGANISATION jugée
      <span class="pink">illégale</span>
    </TextStroke>
    <TextStroke type="whiteStroke" v-if="currentInfo == 3">
      <span class="white">+2000 membres des  BLACK PANTERS</span>
       a travers le pays le poing levé vers le ciel, est leurs signe de protestation
    </TextStroke>
    <TextStroke type="whiteStroke" v-if="currentInfo == 4">
      <span class="white">ATTAQUE POLICIère au siège des black panters </span>
       et se termine par la chute du siège suite a 4H D’AFFRONTEMENTS
    </TextStroke>
    <TextStroke type="pinkStroke" v-if="currentInfo == 5">
      22 août 1969
      <span class="pink">assassinnat</span>de
      <span class="pink">HOEY P. NEWTON </span>
      co-fondateur des black panters, le mouvement s’éteind peu a peu
    </TextStroke>
  </div>
</template>

<script>
import TextStroke from "@/components/TextStroke.vue";
import TimelineBar from "@/components/Timeline/TimelineBar.vue";
import TimelineInfo from "@/components/Timeline/TimelineInfo.vue";

export default {
  components: {
    TextStroke,
    TimelineBar,
    TimelineInfo
  },
    data() {
    return {
      currentInfo: 1,
      infos: [
        {
          id: '1',
          date: '1966'
        },
        {
          id: '2',
          date: '1967'
        },
        {
          id: '3',
          date: '1968'
        },
        {
          id: '4',
          date: '1969'
        },
        {
          id: '5',
          date: '1969'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.blackPanthers {
    width: 100%;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('../../assets/background2.png');
    overflow-y: hidden;
    background-attachment: fixed;
}
</style>
