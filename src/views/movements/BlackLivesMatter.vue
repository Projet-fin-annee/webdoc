<template>
  <div class="blackLivesMatter">
    <TimelineBar>
      <TimelineInfo
      v-for="info in infos"
      :key="info.id"
      :date="info.date"></TimelineInfo>
    </TimelineBar>

    <TextStroke type="whiteStroke">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia
      porro mollitia eligendi
      <span
        class="pink"
      >quos</span>ipsam molestias
      illum animi earum omnis qui voluptates culpa incidunt placeat
      <span
        class="white"
      >beatae ea, laudantium nobis</span>
      tempore!
    </TextStroke>
    <TextStroke type="pinkStroke">
      Lorem ipsum dolor sit amet consectetur, adipisicing
      <span class="pink">elit.</span>Quaerat nobis maxime
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
</style>
  