<template>
    <div class="timeline">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.timeline{
  margin: 60px 0px;
  width: 100%;
  height: 1px;
  background-color: $neutral-white;
  display: flex;
  justify-content: space-around;
}
</style>