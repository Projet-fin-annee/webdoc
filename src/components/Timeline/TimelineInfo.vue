<template>
  <div class="timeline__details">
    <div class="timeline__points"></div>
    <p class="timeline__text">{{ date }}</p>
  </div>
</template>

<script>
export default {
  props: ['date']  
}
</script>

<style lang="scss">
.timeline{
  &__details{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40px;
    cursor: pointer;
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