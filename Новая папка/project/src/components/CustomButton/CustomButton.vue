<template>
  <button
    :class="[`button--${this.buttonStyle}`, classButton]"
    @click="$emit('click')"
    :disabled="isDisabled"
  >
    <div class="header__start-icon" v-if="startIcon">
      <SvgIcon
        :name="startIcon"
        :svgClass="startClass"
      />
    </div>
    <slot></slot>
    <div class="header__icon" v-if="icon">
      <SvgIcon
        :name="icon"
        :svgClass="xClass"
        :svgHeight="svgHeight"
        :svgWidth="svgWidth"
      />
    </div>
  </button>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

export default {
  name: "CustomButton",
  props: {
    startClass: String,
    startIcon: String,
    icon: String,
    xClass: String,
    buttonStyle: {
      type: String,
      default: "primary",
    },
    classButton: {
      type: String,
      default: "button",
    },
    svgWidth: String,
    svgHeight: String,
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SvgIcon,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>