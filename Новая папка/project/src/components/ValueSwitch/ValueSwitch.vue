<template>
  <div
    class="switcher"
    :class="{ 'switcher--active': isActive }"
    @click="toggleSwitch"
  >
    <div class="switcher__ball"></div>
  </div>
</template>

<script>
export default {
  props:{
    isActive: Boolean
  },
  methods: {
    toggleSwitch() {
      this.$emit("switched", !this.isActive);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
