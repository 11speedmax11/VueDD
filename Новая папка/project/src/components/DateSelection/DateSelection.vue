<template>
  <div class="date" v-click-outside="closeMenu">
    <div
      class="date__wrapper"
      :class="{ active: isDropdownOpen }"
      @click="toggleDropdown"
    >
      <div class="date__value" :class="{ placeholder: !handleDateSelected }">
        {{ handleDateSelected || placeholder }}
      </div>
      <div class="date__picture">
        <SvgIcon :name="'calendar'" svgClass="date__svg" />
      </div>
    </div>
    <div class="date__selection" v-if="isDropdownOpen">
      <CalendarCustom @dateSelected="dateSelected" :selectedDate="dateValue"/>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import CalendarCustom from "@/components/CalendarCustom/CalendarCustom.vue";

export default {
  props: {
    placeholder: {
      type: String,
      default: "Дата...",
    },
    selectedDate: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isDropdownOpen: false,
     };
  },
  components: {
    SvgIcon,
    CalendarCustom,
  },
  computed: {
    dateValue(){return this.selectedDate},
    handleDateSelected() {
      if (this.selectedDate != null) {
        let date = new Date(this.selectedDate);
        const dateString = `${date
          .getDate()
          .toString()
          .padStart(2, "0")}.${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${date.getFullYear()}`;
        return dateString;
      }
      return false;
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeMenu() {
      this.isDropdownOpen = false;
    },
    dateSelected(date){
      this.$emit("dateSelected", date);
    }
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>