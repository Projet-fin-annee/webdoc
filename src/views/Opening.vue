<template>
  <div class="opening">
    <GlobalAudio></GlobalAudio>
    <NavbarMobile></NavbarMobile>
    <NavbarDesktop></NavbarDesktop>
    <h1 class="opening__title">ET MAINTENANT ?</h1>
    <div class="opening__texts">
      <p
        class="opening__text"
      >Notre étude documentaire s’est faite entre le 1er et le 10 Juin 2020 au regard des évenement mondiaux contre les violences policières à caractère racistes mais aussi pour les droits fondamentaux et la justice pour les personnes noires.</p>
      <p class="opening__text opening__text--pink">OR DEPUIS énormement de choses se sont passées...</p>
      <p class="opening__text">
        entre
        LA CONDAMNATION PUIS LA LIBération sous caution des policiers impliqués dans le meurtre de george floyd
        les prises de paroles des politiciens qui parlent de ce mouvement comme un rassemblement de “thugs” (D.TRUMP) ou encore une démarche “communautaire” (E.Macron),
        les diverses interdictions de rassemblements, L’AMPLEUR INCROYABLE QUE PRENDS LE MOUVEMENT
        les nouvelles violences policières sur personne noires (
        <span>mort de rayshard brooks</span>, récemment une femme enceinte malmené dans le rer parisien )
        les manifestations policières
      </p>
      <p class="opening__text">
        <span>
          ce serait infini...
          aujourd’hui nous vous voulons faire avancer les choses, ON ENTENDS:
        </span>
        “JE NE SUIS PAS CONCERNé par cette cause, elle ne m’ATTEINT PAS, MAIS JE VEUX AGIR”
      </p>
      <p
        class="opening__text opening__text--pink"
      >pour etayer notre propos nous allons citer chriselle lim femme d’AFFAIRE D’ORIGINE ASIATIQUE</p>
      <p class="opening__text">
        “Privilege is
        <span>ok, its not being racist></span> but the problem is
        <em>if you do not realize that u are privileged</em>... these are things i’ve never had to worry about, , that my kids never had to worry about, but my black brothers and sisters have to worry about every single days . So the question is ;
        <span>What we doing about it ?</span>
        1/ SPEAK UP during unconfortable conversations ( family, kids... )
        2/ KNOW YOUR PRIVILEGE SHOW UP AND SUPPORT
        3/ SIGN PETITIONS PAPER
        4/ DONATE“
      </p>
      <p class="opening__text">
        <span>ce combat ne se limite pas à une seule communauté chacun peut agir pour faire changer les choses et c’est important a notre échelle pour que ces violences POLICIèRES RACISTES qui se perpétuent dans le temps</span> NE SOIENT PLUS MASQUées sous couverts de justice.
      </p>
    </div>
  </div>
</template>

<script>
import GlobalAudio from "@/components/GlobalAudio.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
import NavbarDesktop from "@/components/NavbarDesktop.vue";
export default {
  components: {
    GlobalAudio,
    NavbarMobile,
    NavbarDesktop
  }
};
</script>

<style lang="scss">
.opening {
  width: 100%;
  min-height: 100vh;
  background-color: black;
  overflow-y: hidden;
  &__title {
    font-size: 30px;
    padding-top: 60px;
    font-weight: 900;
    -webkit-text-stroke: 1px $neutral-white;
    color: transparent;
    @include medium {
      padding-top: 80px;
      font-size: 40px;
    }
    @include large {
      font-size: 100px;
    }
  }
  &__texts {
    margin-top: 20px;
    @include medium {
      margin-top: 80px;
    }
    @include large {
      margin-top: 120px;
    }
  }
  &__text {
    font-size: 24px;
    text-align: left;
    text-transform: uppercase;
    margin: 40px 30px;
    &--pink {
      color: $primary-color;
    }
    span {
      color: $primary-color;
    }
    em {
      text-decoration: underline;
    }
    @include medium {
      margin: 40px 60px;
    }
    @include large {
      margin: 40px 80px;
      font-size: 50px;
      line-height: 70px;
    }
  }
}
</style>


