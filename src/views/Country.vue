<template>
  <div class="country">
    <div class="country__back"></div>
    <BackButton>retour à la carte</BackButton>
    <CountrySpeech class="section1"></CountrySpeech>
    <IndicatorScroll></IndicatorScroll>
    <CountryIntro v-if="countryData" :countryData="countryData" class="section2"></CountryIntro>
    <CountryUprising class="section3"></CountryUprising>
  </div>
</template>

<script>
var VueScrollTo = require("vue-scrollto");
var debounce = require("debounce");
import { getCountry } from "../services/index";

import BackButton from "../components/Buttons/BackButton.vue";
import IndicatorScroll from "../components/Country/IndicatorScroll.vue";
import CountrySpeech from "@/components/Country/CountrySpeech.vue";
import CountryIntro from "@/components/Country/CountryIntro.vue";
import CountryUprising from "@/components/Country/CountryUprising.vue";
export default {
  name: "Country",
  components: {
    CountrySpeech,
    BackButton,
    IndicatorScroll,
    CountryIntro,
    CountryUprising
  },

  data() {
    return {
      country: this.$route.query.country,
      countryData: null,
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
    this.fetchData();
  },
  methods: {
    fetchData() {
      getCountry(this.country).then(resp => {
        console.log("resp", resp);
        return (this.countryData = resp);
      });
    },
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

.section4 {
  background-color: pink;
}

.section5 {
  background-color: green;
}
</style>