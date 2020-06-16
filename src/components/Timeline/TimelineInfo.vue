<template>
  <div class="timeline__details">
    <div class="timeline__points"></div>
    <p class="timeline__text">{{ date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    date:String
  }
}
</script>

<style lang="scss">
.timeline{
  &__details{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  &__details.active > .timeline__points{
    background-color:$primary-color;
  }
  &__details.active > .timeline__text{
    color:$primary-color;
  }
  &__details.active{
    border-bottom: 2px solid $primary-color;
  }
  &__points{
    width: 12px;
    height: 12px;
    transform: translateY(-50%);
    border-radius: 100%;
    background-color: $neutral-white;
  }
  &__text{
    font-family: PlayfairDisplay-Regular;
    color: $light-grey;
  }
}
</style>