<template>
  <div class="worldmap">
    <GlobalAudio></GlobalAudio>
    <NavbarMobile></NavbarMobile>
    <NavbarDesktop currentPage="CARTE DES PROTESTATIONS"></NavbarDesktop>
    <WorldmapMobile
      v-for="land in lands"
      :key="land.id"
      :path="land.path"
      :image="land.image"
      :country="land.country"
      :hashtag="land.hashtag"
    ></WorldmapMobile>
    <div class="worldmapDesktop">
      <h1 class="worldmapDesktop__title">
        LES MOUVEMENTS REACTIONNAIRES DANS LE MONDE SUITE A LA MORT DE GEORGE
        FLOYD
      </h1>
      <div class="worldmapDesktop__details">
        <Map></Map>
        <div class="worldmapDesktop__buttons">
          <router-link
            v-for="country in countries"
            :key="country.id"
            :to="{path:'/worldmap/' + slugify(country.country), query : {country:slugify(country.country)}}"
          >
            <Button>{{country.country}}</Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalAudio from "@/components/GlobalAudio";
import NavbarMobile from "@/components/NavbarMobile";
import NavbarDesktop from "@/components/NavbarDesktop";
import WorldmapMobile from "@/components/WorldmapMobile";
import Map from "@/components/Map";
import Button from "../components/Buttons/Button.vue";
import { getCountries } from "../services/index";
import { string_to_slug } from "../outils";

export default {
  name: "WorldMap",
  components: {
    GlobalAudio,
    NavbarDesktop,
    NavbarMobile,
    WorldmapMobile,
    Map,
    Button
  },

  data() {
    return {
      countries: null,
      lands: [
        {
          id: "US",
          path: "/movements/AfroAmerica",
          image: "unitedstates.png",
          country: "ETATS-UNIS",
          hashtag: "LA SOURCE"
        },
        {
          id: "FR",
          path: "/",
          image: "france.png",
          country: "FRANCE",
          hashtag: "LE COMBAT ADAMA"
        },
        {
          id: "CA",
          path: "/",
          image: "canada.png",
          country: "CANADA",
          hashtag: "UN COMBAT FRONTALIER"
        },
        {
          id: "NZ",
          path: "/",
          image: "newzealand.png",
          country: "NOUVELLE ZELANDE",
          hashtag: "la réaction d'un peuple diversifié"
        },
        {
          id: "UK",
          path: "/",
          image: "brazil.png",
          country: "ROYAUME-UNI",
          hashtag: "UN ÉTERNEL COMBAT"
        },
        {
          id: "HW",
          path: "/",
          image: "hawai.png",
          country: "HAWAÏ",
          hashtag: "UN COMBAT IMPORTANT"
        }
      ]
    };
  },
  mounted() {
    console.log("ee");

    this.fetchData();
  },
  methods: {
    fetchData() {
      getCountries().then(resp => {
        console.log(resp);

        return (this.countries = resp);
      });
    },
    slugify: string_to_slug
  }
};
</script>

<style lang="scss">
.worldmap {
  overflow-x: hidden;

  @include large {
    background-image: url("../assets/backgroundmap.png");
    @include backgroundCenter;
  }

  .worldmapDesktop {
    display: none;
    @include large {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 100%;
      height: 100vh;
    }
    &__details {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      height: 40%;
      margin-top: 20vh;
    }
    &__title {
      margin-top: 40px;

      font-size: 26px;
      font-weight: 600;
    }
  }
}
</style>
