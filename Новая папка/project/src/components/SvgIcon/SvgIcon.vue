<template>
  <svg :class="svgClass" :style="styleSize" xmlns="http://www.w3.org/2000/svg" @click="$emit('click')">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",

  props: {
    name: String,
    svgClass: String,
    svgWidth: {
      type: String,
      default: "24px",
    },
    svgHeight: {
      type: String,
      default: "24px",
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }

      return icon.url;
    },
    styleSize() {
      let style = {};
      style.width = this.svgWidth;
      style.height = this.svgHeight;

      return style;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
