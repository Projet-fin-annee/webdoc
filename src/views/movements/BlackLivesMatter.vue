<template>
  <div class="blackLivesMatter">
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

export default {
  components: {
    TextStroke
  }
};
</script>

<style lang="scss">
.blackLivesMatter {
    width: 100%;;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('../../assets/background2.png');
    overflow-y: hidden;
    background-attachment: fixed;
}
</style>
  