<template>
  <div class="loader">
    <SvgIcon class="loader__circle" name="preloader" svgHeight="40px" svgWidth="40px"/>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
