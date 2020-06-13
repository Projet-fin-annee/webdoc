<template>
  <div class="countryUprising">
    <h2 class="countryUprising__title">“QUI NOUS PROTège de ceux censés nous protéger ?”</h2>
    <div class="countryUprising__details">
      <div class="countryUprising__images">
        <img
          src="../../assets/country/uprising_us1.png"
          alt="image uprising"
          class="countryUprising__image1"
        />
        <img
          src="../../assets/country/uprising_us2.png"
          alt="image uprising"
          class="countryUprising__image2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.countryUprising {
  min-height: 100vh;
  padding-top: 110px;

  &__title {
    color: $primary-color;
    text-transform: uppercase;
    font-weight: 900;
    @include large {
      font-size: 50px;
    }
  }
}
</style>