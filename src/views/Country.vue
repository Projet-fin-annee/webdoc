<template>
  <div class="country">
    <router-link to="/WorldMap">
      <BackButton>retour à la carte</BackButton>
    </router-link>

    <CountryHero class="section1"></CountryHero>
    <CountrySpeech class="section2"></CountrySpeech>
    <CountryIntro class="section3"></CountryIntro>
    <CountryUprising class="section4"></CountryUprising>
  </div>
</template>

<script>
var VueScrollTo = require("vue-scrollto");
var debounce = require("debounce");

import BackButton from "../components/Buttons/BackButton.vue";

import CountryHero from "@/components/Country/CountryHero.vue";
import CountrySpeech from "@/components/Country/CountrySpeech.vue";
import CountryIntro from "@/components/Country/CountryIntro.vue";
import CountryUprising from "@/components/Country/CountryUprising.vue";

export default {
  name: "Country",
  components: {
    BackButton,
    CountryHero,
    CountrySpeech,
    CountryIntro,
    CountryUprising
  },
  data() {
    return {
      scrollPosition: 0,
      active: null,
      lastActive: null,
      lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
      scrollStarted: false,
      down: true
    };
  },
  mounted() {
    this.active = 1;
    this.lastActive = 1;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let vm = this;
      let options = {
        container: "body",
        easing: "ease-in",
        offset: 0,
        cancelable: false,
        onStart: function() {
          document.body.style.overflow = "hidden";
        },
        onDone: debounce(function() {
          if (vm.down) vm.active++;
          else vm.active--;
          vm.scrollStarted = false;
          document.body.style.overflow = "auto";
        }, 100),
        x: false,
        y: true
      };
      let st = window.scrollY;
      if (st > this.lastScrollTop) {
        this.down = true;
      } else {
        this.down = false;
      }
      this.lastScrollTop = st;
      if (!this.scrollStarted) {
        this.scrollStarted = true;
        if (this.down) {
          this.down = true;
          if (this.active === 1) {
            VueScrollTo.scrollTo(".section2", 500, options);
          } else if (this.active === 2) {
            VueScrollTo.scrollTo(".section3", 500, options);
          } else if (this.active === 3) {
            VueScrollTo.scrollTo(".section4", 500, options);
          } else if (this.active === 4) {
            VueScrollTo.scrollTo(".section5", 500, options);
          }
        } else {
          if (this.active === 2) {
            VueScrollTo.scrollTo(".section1", 500, options);
          } else if (this.active === 3) {
            VueScrollTo.scrollTo(".section2", 500, options);
          } else if (this.active === 4) {
            VueScrollTo.scrollTo(".section3", 500, options);
          } else if (this.active === 5) {
            VueScrollTo.scrollTo(".section4", 500, options);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
.country {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../assets/texture2.png");
  background-attachment: fixed;
}
.section1,
.section2,
.section3,
.section4,
.section5 {
  min-height: 100vh;
}

.section5 {
  background-color: green;
}
</style>