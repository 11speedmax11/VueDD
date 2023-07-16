<template>
  <div
    class="custom-select"
    :class="[{ active: isDropdownOpen }, xClass]"
    v-click-outside="closeSelect"
  >
    <div
      class="custom-select__wrapper"
      :class="[{ search: isSearch }, { turn: isTurn }]"
    >
      <div class="selected-option" @click="toggleDropdown">
        <div
          class="selected-text"
          :class="{ placeholder: !selectedOptionValue }"
        >
          {{ (selectedOptionValue && selectedOptionValue.name) || placeholder }}
        </div>
        <div class="custom-select__svg">
          <SvgIcon :name="'vector'" svgClass="svg__select" />
        </div>
      </div>

      <CustomButton
        xClass="svg__sort"
        icon="sort-up"
        buttonStyle="secondary"
        v-if="isSearch"
        @click="turnIcon"
      />
    </div>
    <ul class="options" v-show="isDropdownOpen">
      <li
        v-for="option in options"
        :key="option[keyName]"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template> 
 
<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  components: {
    SvgIcon,
    CustomButton,
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  props: {
    xClass: String,
    options: Array,
    placeholder: String,
    isSearch: Boolean,
    keyName: {
      type: String,
      default: "key",
    },
    selectedOption: {
      type: String,
      default: () => null,
    },
    isTurn: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
  },
  computed: {
    selectedOptionValue() {
      return (this.options || []).find(
        (x) => x[this.keyName] == this.selectedOption
      );
    },
  },
  methods: {
    toggleDropdown() {
      if (!this.disabled) {
        this.isDropdownOpen = !this.isDropdownOpen;
      }
    },
    selectOption(option) {
      this.isDropdownOpen = false;
      this.$emit("input", option[this.keyName]);
    },
    closeSelect() {
      this.isDropdownOpen = false;
    },
    turnIcon() {
      this.$emit("turnIcon", !this.isTurn);
    },
  },
};
</script> 

<style lang="scss">
@import "./index.scss";
</style>
