<template>
  <div class="tutorial">
    <p class="tutorial__instruction">
      Découvre
      <em>les mouvements réactionnaires</em> suite à la mort de George Floyd à travers le monde en cliquant sur les
      <span>boutons</span> correspondant aux pays en
      <span>rose.</span>
    </p>
    <div class="tutorial__details">
      <div class="tutorial__map">
        <svg
          width="232"
          height="211"
          viewBox="0 0 232 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M231 193.391L227.467 175.397L217.187 183.356L213.975 191.315L218.472 205.848L226.182 210L231 193.391ZM129.813 17.2632L122.103 8.95862L115.036 8.61257L112.788 1L98.9749 5.15231L94.4778 22.7997L58.1789 39.4089L43.4023 30.4123L47.8996 54.6341L21.5587 49.0977L1 53.596L2.285 69.5132L26.3772 77.8179L37.9414 88.5447L54.3242 111.036L51.1119 153.598L42.4386 166.401L48.8632 174.705L79.0588 184.394L85.1621 179.896L103.472 189.584L122.746 186.816L124.352 174.013L148.123 167.093L180.246 172.629L194.701 160.864L196.307 151.522L187.634 148.753L182.816 132.144L188.277 125.916L183.137 117.611L183.779 111.729L177.997 102.386L170.288 105.5V95.8113L181.531 83.7003L180.888 78.1639L188.277 80.2401L192.453 76.7798L194.059 61.2086L201.447 46.6755L178.64 42.5232L170.93 36.9868L166.433 37.3328L162.9 35.6027L148.765 25.9139L140.735 27.298L129.813 17.2632Z"
            fill="#FF7E7E"
            stroke="black"
            stroke-width="0.6"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Button class="tutorial__button">France</Button>
    </div>
    <router-link to="/WorldMap">
      <Button type="outline" class="tutorial__next">
        DÉCOUVRIR LA CARTE DU MONDE
      </Button>
    </router-link>
  </div>
</template>

<script>
import Button from "../components/Buttons/Button.vue";

export default {
  name: "Tutorial",
  components: {
    Button
  }
};
</script>

<style lang="scss">
@import "../scss/style.scss";
.tutorial {
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
  &__instruction {
    font-size: 16px;
    width: 80%;
    line-height: 22px;
    text-align: left;
    @include medium {
      font-size: 22px;
      line-height: 42px;
    }
    @include large {
      font-size: 24px;
    }
    em {
      font-weight: bold;
    }
    span {
      color: $primary-color;
      font-weight: bold;
    }
  }
  &__details {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 40%;
    justify-content: space-around;
  }
  &__button {
    pointer-events: none;
  }
}
</style>    