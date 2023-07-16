<template>
  <div class="input-custom" :class="{ isSearch: isSearch }">
    <input
      class="input"
      :value="value"
      :placeholder="placeholder"
      @input="input($event.target.value)"
      :type="typeInput"
      @change="input($event.target.value)"
    />
    <SvgIcon
      name="clear"
      svgClass="svgClear"
      svgHeight="16px"
      svgWidth="16px"
      v-if="isFill"
      @click="click"
    />
    <SvgIcon
      @click="search"
      name="search"
      svgClass="svgSearch"
      v-if="isSearch"
    />
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import VModelMixin from '@/mixin/VModelMixin.js';
export default {
  mixins: [VModelMixin],
  props: {
    typeInput: String,
    placeholder: String,
    isClear: Boolean,
    isSearch: Boolean,
  },
  components: {
    SvgIcon,
  },
  computed: {
    isFill() {
      return this.value && this.isClear;
    },
  },
  methods: {
    click() {
      this.$emit("input", "");
      this.$emit("search", "");
    },
    search() {
      this.$emit("search", this.value);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
