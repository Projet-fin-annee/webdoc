<template>
  <div class="introduction">
    <div class="introduction__texts">
      <vue-typer text="Aujourd'hui partout dans le monde on assiste à une exaspération générale vis à vis des réactions souvent disproportionnées et violentes des forces de l'ordre.
      
George Floyd est un citoyen afro-Américain mort après une violente interpellation de police suite à un long et douloureux plaquage ventral le 25 mai 2020 à Minneapolis dans le Minnesota aux USA. Interpellé car soupçonné d’avoir utilisé un faux chèque dans une épicerie il a subit une violence démesurée et motivée par un racisme apparent durant son interpellation. 
Suite à ce meurte, de partout dans le monde, les cris des militants résonnent, cette violence policière envers les noirs doit cesser." :repeat='0' :type-delay='40' :shuffle='true'></vue-typer>
    </div>
    <router-link to="/tutorial">
      <Button class="introduction__button" type="outline">
        PASSER L’INTRODUCTION
      </Button>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Buttons/Button.vue";
export default {
name: "Introduction",
  components: {
    Button
  }
}
</script>char custom typed

<style lang='scss'>
@import "../scss/style.scss";
.introduction{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/background2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &__texts{
    width: 75%;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .char.custom.typed{
    line-height: 22px;
    font-size: 16px;
    color: $neutral-white;
    @include medium {
      font-size: 22px;
      line-height: 42px;
    }
    @include large {
      font-size: 24px;
    }
  }
}
</style>