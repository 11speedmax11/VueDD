<template>
  <button :class="classButton" type="button" @click="$emit('click')" :disabled="disabled">
    <slot></slot>
    <div class="header__icon">
      <SvgIcon :name="icon" :svgClass="xClass" v-if="icon" />
    </div>
  </button>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

export default {
  name: "CustomButton",
  props: {
    icon: String,
    xClass: String,
    classButton: {
      type: String,
      default: "button"
    },
  },
  components: {
    SvgIcon,
  },
  computed: {
    disabled() {
      return this.classButton == "navigation__item"
    }
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>