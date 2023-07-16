<template>
  <div
    class="custom-select"
    :class="[{ active: isDropdownOpen }, xClass]"
    v-click-outside="closeSelect"
  >
    <div class="custom-select__wrapper" :class="{ search: isSearch }">
      <div class="selected-option" @click="toggleDropdown">
        <div
          class="selected-text"
          :class="{ placeholder: !(selectedOption || []).length }"
        >
          <span v-if="(selectedOption || []).length">Выбрано: </span>
          {{ (selectedOption || []).length || placeholder }}
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
      />
    </div>
    <ul class="options" v-show="isDropdownOpen">
      <li
        v-for="option in options"
        :key="option.key"
        @click="selectOptions(option)"
        :class="{ search: isActive(option) }"
      >
        <div class="options__check">
          <SvgIcon
            :name="'check'"
            svgClass="options__svg"
            v-if="!isActive(option)"
          />
          <SvgIcon :name="'check_active'" svgClass="options__svg" v-else />
        </div>
        <div class="options__value">
          {{ option.name }}
        </div>
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
    selectedOption: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOptions(option) {
      const arrOption = [...(this.selectedOption || [])];
      if (arrOption.find((x) => x == option.key)) {
        this.$emit(
          "optionSelected",
          arrOption.filter((x) => x != option.key).map((y) => y)
        );
      } else {
        arrOption.push(option.key);
        this.$emit(
          "optionSelected",
          arrOption.map((y) => y)
        );
      }
    },
    closeSelect() {
      this.isDropdownOpen = false;
    },
    isActive(option) {
      return (this.selectedOption || []).includes(option.key);
    },
  },
};
</script> 

<style lang="scss">
@import "./index.scss";
</style>
