<template>
  <div class="movements">
    <Movement
      :path="detailsMovement.path.afm"
      :image="detailsMovement.image.afm"
      :date="detailsMovement.date.afm"
      :chapter="detailsMovement.chapter.afm"
      :title="detailsMovement.title.afm"
    ></Movement>
    <Movement
      :path="detailsMovement.path.bp"
      :image="detailsMovement.image.bp"
      :date="detailsMovement.date.bp"
      :chapter="detailsMovement.chapter.bp"
      :title="detailsMovement.title.bp"
    ></Movement>
    <Movement
      :path="detailsMovement.path.blm"
      :image="detailsMovement.image.blm"
      :date="detailsMovement.date.blm"
      :chapter="detailsMovement.chapter.blm"
      :title="detailsMovement.title.blm"
    ></Movement>
  </div>
</template>

<script>
import Movement from "@/components/Movement.vue";

export default {
  name: "Movements",
  components: {
    Movement
  },
  data() {
    return {
      detailsMovement: {
        path: {
          afm: "/movements/AfroAmerica",
          bp: "/movements/BlackPanthers",
          blm: "/movements/BlackLivesMatter"
        },
        image: {
          afm: "movementafro.png",
          bp: "blackpanthers.png",
          blm: "blm.png"
        },
        date: {
          afm: "1954 - 1968",
          bp: "1966 - 1981",
          blm: "1966 - aujourd'hui"
        },
        chapter: {
          afm: "I",
          bp: "II",
          blm: "III"
        },
        title: {
          afm: "Mouvement Afro-Américain des droits civiques",
          bp: "Black Panthers",
          blm: "BLACK LIVES MATTER"
        }
      }
    };
  }
};
</script>

<style lang='scss'>
@import "../scss/style.scss";
a{
  padding: 0;
}
.movements {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-image: url("../assets/texture.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @include large {
    flex-direction: row;
  }
}
</style>