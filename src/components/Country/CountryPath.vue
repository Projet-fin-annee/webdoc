<template>
  <div class="countryPath">
    <div class="countryPath__container">
        <div class="countryPath__land">
      <router-link to="/">
          <h3 class="countryPath__subtitle"> FRANCE </h3>
          <img class="countryPath__image" src="../../assets/france.png" alt="">
      </router-link>
        </div>
        <div class="countryPath__land">
      <router-link to="/">
          <h3 class="countryPath__subtitle"> FRANCE </h3>
          <img class="countryPath__image" src="../../assets/france.png" alt="">
      </router-link>
        </div>
        <div class="countryPath__land">
      <router-link to="/">
          <h3 class="countryPath__subtitle"> FRANCE </h3>
          <img class="countryPath__image" src="../../assets/france.png" alt="">
      </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.countryPath{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    @include large{
      width: 90%;
      height: 70vh;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &__land{
    height: calc(100vh/3);
    position: relative;
    cursor: pointer;
    transition: all .4s ease-in-out;
      @include large{
      width: 30%;
      height: 100%;
      &:hover{
        transform: translateY(-10px);
      }
    }
  }
  &__subtitle{
    color: $primary-color;
    z-index: 1;
    position: absolute;
    font-size: 20px;
    font-weight: 900;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @include medium{
      font-size: 36px;
    }
    @include large{
      font-size: 50px;
    }
  }
  &__image{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>