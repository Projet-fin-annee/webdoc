<template>
  <div class="country">
    <router-link to="/WorldMap">
      <BackButton>retour à la carte</BackButton>
    </router-link>
    <CountryHero v-if="countryData" :countryData="countryData" class="section1"></CountryHero>
    <CountrySpeech v-if="countryData" :countryData="countryData" class="section2"></CountrySpeech>
    <CountryIntro v-if="countryData" :countryData="countryData" class="section3"></CountryIntro>
    <CountryUprising v-if="countryData" :countryData="countryData" class="section4"></CountryUprising>
    <CountryPath class="section5"></CountryPath>
    <NavbarDesktop currentPage="CARTE DES PROTESTATIONS"></NavbarDesktop>
    <NavbarMobile></NavbarMobile>
  </div>
</template>

<script>
var VueScrollTo = require("vue-scrollto");
var debounce = require("debounce");
import { getCountry } from "../services/index";

import BackButton from "../components/Buttons/BackButton.vue";

import NavbarMobile from "@/components/NavbarMobile.vue";
import NavbarDesktop from "@/components/NavbarDesktop.vue";

import CountryHero from "@/components/Country/CountryHero.vue";
import CountrySpeech from "@/components/Country/CountrySpeech.vue";
import CountryIntro from "@/components/Country/CountryIntro.vue";
import CountryUprising from "@/components/Country/CountryUprising.vue";
import CountryPath from "@/components/Country/CountryPath.vue";

export default {
  name: "Country",
  components: {
    BackButton,
    CountryHero,
    CountrySpeech,
    CountryIntro,
    CountryUprising,
    CountryPath,
    NavbarMobile,
    NavbarDesktop
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
          }else if (this.active === 5) {
            VueScrollTo.scrollTo(".section6", 500, options);
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
          }else if (this.active === 6) {
            VueScrollTo.scrollTo(".section5", 500, options);
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
.section5,
.section6 {
  min-height: 100vh;
}

.section6 {
  background-color: green;
}
</style>