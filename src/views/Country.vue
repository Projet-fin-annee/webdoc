<template>
  <div class="country">
    <div class="country__back"></div>
    <BackButton>retour à la carte</BackButton>
    <CountrySpeech class="section1"></CountrySpeech>
    <IndicatorScroll></IndicatorScroll>
    <CountryIntro class="section2"></CountryIntro>
  </div>
</template>

<script>
var VueScrollTo = require("vue-scrollto");
var debounce = require("debounce");

import BackButton from "../components/Buttons/BackButton.vue";
import IndicatorScroll from "../components/Country/IndicatorScroll.vue";
import CountrySpeech from "@/components/Country/CountrySpeech.vue";
import CountryIntro from "@/components/Country/CountryIntro.vue";

export default {
  name: "Country",
  components: {
    CountrySpeech,
    BackButton,
    IndicatorScroll,
    CountryIntro
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
  &__back {
    background-color: $primary-color;
    @include large {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(50%);
      width: 3px;
      height: 40px;
    }
  }
}
.section1,
.section2,
.section3,
.section4,
.section5 {
  min-height: 100vh;
}

.section3 {
  background-color: red;
}

.section4 {
  background-color: pink;
}

.section5 {
  background-color: green;
}
</style>