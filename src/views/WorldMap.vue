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
  </div>
</template>

<script>
import NavbarMobile from "@/components/NavbarMobile";
import NavbarDesktop from "@/components/NavbarDesktop";
import WorldmapMobile from "@/components/WorldmapMobile";
export default {
  name: "WorldMap",
  components: {
    NavbarDesktop,
    NavbarMobile,
    WorldmapMobile
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
    background-image: url("../assets/background2.png");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>