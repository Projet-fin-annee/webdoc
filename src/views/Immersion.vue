<template>
  <div class="sections">
    <CountrySpeech class="section1"></CountrySpeech>
    <CountryIntro class="section2"></CountryIntro>
    <div class="section3">dshkq</div>
    <div class="section4">dshkdshjkhsq</div>
    <div class="section5">dshkq</div>
  </div>
</template>

<script>
var VueScrollTo = require("vue-scrollto");
var debounce = require("debounce");
import CountrySpeech from "@/components/Country/CountrySpeech.vue";
import CountryIntro from "@/components/Country/CountryIntro.vue";
export default {
  components: {
    CountrySpeech,
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

<style>
/* .sections {
  background-color: red;
  width: 100%;
  height: 100vh;
} */

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
