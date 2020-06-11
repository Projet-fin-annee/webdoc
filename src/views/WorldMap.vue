<template>
  <div class="worldmap">
    <NavbarMobile></NavbarMobile>
    <NavbarDesktop currentPage="CARTE DES PROTESTATIONS"></NavbarDesktop>
    <WorldmapMobile
      :path="detailsWorldMap.path.US"
      :image="detailsWorldMap.image.US"
      :country="detailsWorldMap.country.US"
      :hashtag="detailsWorldMap.hashtag.US"
    ></WorldmapMobile>
    <WorldmapMobile
      :path="detailsWorldMap.path.FR"
      :image="detailsWorldMap.image.FR"
      :country="detailsWorldMap.country.FR"
      :hashtag="detailsWorldMap.hashtag.FR"
    ></WorldmapMobile>
    <WorldmapMobile
      :path="detailsWorldMap.path.CA"
      :image="detailsWorldMap.image.CA"
      :country="detailsWorldMap.country.CA"
      :hashtag="detailsWorldMap.hashtag.CA"
    ></WorldmapMobile>
    <WorldmapMobile
      :path="detailsWorldMap.path.NZ"
      :image="detailsWorldMap.image.NZ"
      :country="detailsWorldMap.country.NZ"
      :hashtag="detailsWorldMap.hashtag.NZ"
    ></WorldmapMobile>
    <WorldmapMobile
      :path="detailsWorldMap.path.BR"
      :image="detailsWorldMap.image.BR"
      :country="detailsWorldMap.country.BR"
      :hashtag="detailsWorldMap.hashtag.BR"
    ></WorldmapMobile>
    <WorldmapMobile
      :path="detailsWorldMap.path.HW"
      :image="detailsWorldMap.image.HW"
      :country="detailsWorldMap.country.HW"
      :hashtag="detailsWorldMap.hashtag.HW"
    ></WorldmapMobile>
    <div class="worldmapDesktop">
      <h1 class="worldmapDesktop__title">
        LES MOUVEMENTS REACTIONNAIRES DANS LE MONDE
        SUITE A LA MORT DE GEORGE FLOYD
      </h1>
      <div class="worldmapDesktop__details">
        <Map></Map>
        <div class="worldmapDesktop__buttons">
          <router-link to="/">
            <Button>ETATS-UNIS</Button>
          </router-link>
          <router-link to="/">
            <Button>FRANCE</Button>
          </router-link>
          <router-link to="/">
            <Button>CANADA</Button>
          </router-link>
          <router-link to="/">
            <Button>ANGLETERRE</Button>
          </router-link>
          <router-link to="/">
            <Button>NEW ZEALAND</Button>
          </router-link>
          <router-link to="/">
            <Button>HAWAI</Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMobile from "@/components/NavbarMobile";
import NavbarDesktop from "@/components/NavbarDesktop";
import WorldmapMobile from "@/components/WorldmapMobile";
import Map from "@/components/Map";
import Button from "../components/Buttons/Button.vue";

export default {
  name: "WorldMap",
  components: {
    NavbarDesktop,
    NavbarMobile,
    WorldmapMobile,
    Map,
    Button
  },
  data() {
    return {
      detailsWorldMap: {
        path: {
          US: "/movements/AfroAmerica",
          FR: "/",
          CA: "/",
          NZ: "/",
          BR: "/",
          HW: "/"
        },
        image: {
          US: "unitedstates.png",
          FR: "france.png",
          CA: "canada.png",
          NZ: "newzealand.png",
          BR: "brazil.png",
          HW: "hawai.png"
        },
        country: {
          US: "ETATS-UNIS",
          FR: "FRANCE",
          CA: "CANADA",
          NZ: "NOUVELLE ZELANDE",
          BR: "BRÉSIL",
          HW: "HAWAÏ"
        },
        hashtag: {
          US: "LA SOURCE",
          FR: "LE COMBAT ADAMA",
          CA: "LE COMBAT ADAMA",
          NZ: "HASTAG",
          BR: "HASTAG",
          HW: "HASHTAG"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../scss/style.scss";

.worldmap {
  overflow-x: hidden;

  @include large {
    background-image: url("../assets/backgroundmap.png");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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