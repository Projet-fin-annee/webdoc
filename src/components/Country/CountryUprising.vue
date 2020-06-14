<template>
  <div class="countryUprising">
    <h2 class="countryUprising__title">“QUI NOUS PROTège de ceux censés nous protéger ?”</h2>
    <div class="countryUprising__details">
      <div class="countryUprising__texts">
        <p class="countryUprising__text">
          Le gouvernement américain souhaite mettre fin aux manifestations qui reclament un changement au sein de la police.
          Le mouvement BLACK LIVES MATTER s’empare des manifestations.
          On assiste à un réel soulevement contre les discriminations encrée dans la société américaine.
          La communauté noire américaine ne veut plus supporter les vestiges coloniaux/ségregationnistes; un racisme constant et institutionnalisé que l'on considère comme un droit dans certains états.
        </p>
        <p
          class="countryUprising__text"
        >A travers de nombreux posts sur les réseaux sociaux les jeunes afro américains et membres du mouvement dénoncent les inégalités qu'ils subissent fassent à la polices, qu'ils soient ou non afro américains en traitant de la notion de privilège.</p>
      </div>
      <div class="countryUprising__images">
        <img
          src="../../assets/country/uprising_us2.png"
          alt="image uprising"
          class="countryUprising__image1"
        />
        <img
          src="../../assets/country/uprising_us1.png"
          alt="image uprising"
          class="countryUprising__image2"
        />
      </div>
    </div>
    <img
      src="../../assets/country/punch.png"
      alt="punch black lives matter logo"
      class="countryUprising__punch"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.countryUprising {
  min-height: 100vh;
  padding-top: 110px;
  position: relative;
  overflow-x: hidden;

  &__title {
    color: $primary-color;
    text-transform: uppercase;
    font-weight: 900;
    @include large {
      font-size: 50px;
    }
  }
  &__details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @include large {
      margin-top: 100px;
    }
  }
  &__texts {
    @include large {
      width: 30%;
      text-align: left;
      font-size: 20px;
      line-height: 30px;
    }
  }
  &__text {
    @include large {
      margin-bottom: 40px;
    }
  }
  &__images {
    @include large {
      position: relative;
      height: auto;
      z-index: 2;
    }
  }
  &__image1 {
    @include large {
      position: absolute;
      bottom: 0;
      right: 140px;
      transform: rotate(-10deg);
    }
  }
  &__image2 {
    @include large {
      transform: rotate(10deg);
    }
  }
  &__punch {
    position: absolute;
    top: 40px;
    right: -120px;
    transform: rotate(-40deg);
  }
}
</style>