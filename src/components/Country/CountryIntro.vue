<template>
  <div class="countryIntro">
    <div class="countryIntro__titles">
      <h2 class="countryIntro__title">les etats-unis, l’épicentre du mouvement</h2>
      <h2 class="countryIntro__stroke">les etats-unis, l’épicentre du mouvement</h2>
    </div>
    <div class="countryIntro__details">
      <img src="../../assets/country/intro_us.png" alt="image intro" class="countryIntro__image" />
      <p class="countryIntro__text">
        La réaction fut explosive, des dizaines de milliers de personnes, communauté noire mais aussi accompagnés de nombreuses autres, en dépit des couvres feux et des restrictions sanitaires liées au COVID-19 sortent et sillonent les rues réclamant justice pour George Floyd et l’arrêt des violences policières à caractère raciste.
        Ils veulent le jugement des policiers responsables de la mort de George Floyd en dépit de leurs statut trés protégés aux Etats Unis ( il s’avère que le policier l’ayant assasiné n’en était pas à sa première victime. )
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.countryIntro {
  min-height: 100vh;
  padding-top: 110px;
  &__titles {
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 900;
    position: relative;
  }
  &__title {
    @include large {
      color: $neutral-white;
    }
  }
  &__stroke {
    position: absolute;
    top: 20px;
    left: 80px;
    color: transparent;
    -webkit-text-stroke: 1px $primary-color;
  }
  &__details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @include large {
      margin-top: 180px;
    }
  }
  &__image {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.6);
    transform: rotate(-8deg);
  }
  &__text {
    text-align: left;
    @include large {
      font-size: 20px;
      width: 30%;
      line-height: 30px;
    }
  }
}
</style>