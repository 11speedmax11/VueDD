<template>
  <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",

  props: {
    name: String,
    svgClass: String
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }

      return icon.url;
    },
  },
};
</script>

<style>
@import "./index.scss";
</style>
