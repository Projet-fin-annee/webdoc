<template>
  <div class="homeVideo">
    <transition name="homeVideoVisibility">
      <div class="homeVideo__container" v-show="videoVisible">
        <div class="homeVideo__filter"></div>
        <video autoplay loop="loop" id="videoHome">
          <source src="../assets/videos/introVideo.mp4" type="video/mp4" />
        </video>
        <transition name="disclaimerVisibility">
          <h2 class="homeVideo__disclaimer" v-show="disclaimerVisible">
            Ce site a été réalisé à des fins pédagogiques dans le cadre du
            cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas
            fait l'objet d'une demande de droit d'utilisation. Ce site ne sera
            en aucun cas exploité à des fins commerciales et ne sera pas publié
          </h2>
        </transition>
        <transition name="problematicVisibility">
          <h2 class="homeVideo__problematic" v-show="problematicVisible">
            LES MOUVEMENTS DE SOUTIENS A LA LUTTE CONTRE LES VIOLENCES
            POLICIERES A CARACTERE RACISTE DANS LE MONDE
          </h2>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoVisible: true,
      disclaimerVisible: true,
      problematicVisible: false
    };
  },

  created() {
    setTimeout(() => (this.videoVisible = false), 10000),
    setTimeout(() => (this.disclaimerVisible = false), 4500),
    setTimeout(() => (this.problematicVisible = true), 5000);
  }
};
</script>

<style lang="scss">
.homeVideo {
  z-index: 3;
  position: fixed;
  width: 100%;
  max-height: 100vh;
  &__container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  video#videoHome {
    min-width: 100%;
    min-height: 100vh;
  }
  &__filter {
    position: absolute;
    background: black;
    width: 100%;
    height: 100vh;
    opacity: 0.6;
  }
  &__disclaimer,
  &__problematic {
    color: $neutral-white;
    text-align: center;
    transform: translateY(-50%);
    z-index: 5;
    position: absolute;
    max-width: 80%;
    top: 50%;
    font-weight: 900;
    font-size: 20px;
    line-height: 28px;
    @include medium {
      font-size: 36px;
      line-height: 52px;
      max-width: 70%;
    }
  }
}
.homeVideoVisibility-leave-active {
  transition: all 1s ease-in-out;
}
.homeVideoVisibility-leave-to {
  opacity: 0;
}
.disclaimerVisibility-leave-active,
.problematicVisibility-enter-active {
  transition: all 0.5s ease-in-out;
}
.disclaimerVisibility-leave-to,
.problematicVisibility-enter-to {
  opacity: 0;
}
</style>
