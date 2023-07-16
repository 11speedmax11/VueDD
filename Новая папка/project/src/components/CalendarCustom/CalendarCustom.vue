<template>
  <div class="calendar">
    <div class="calendar__header">
      <CustomButton
        xClass="calendar__back-btn"
        icon="vector"
        buttonStyle="secondary"
        @click="previousMonth"
      />
      <CustomSelect
        xClass="calendar__month"
        :options="monthOptions"
        :selectedOption="monthOptions[this.currentMonth].name"
        keyName="name"
        @input="updateCalendarMonth"
        v-model="currentMonthName"
      >
      </CustomSelect>
      <CustomSelect
        xClass="calendar__year"
        :options="yearRange"
        :selectedOption="currentYear.toString()"
        v-model="currentYear"
      >
      </CustomSelect>
      <CustomButton
        xClass="calendar__next-btn"
        icon="vector"
        buttonStyle="secondary"
        @click="nextMonth"
      />
    </div>
    <table class="calendar__table">
      <thead>
        <tr>
          <th v-for="day in dayNames" :key="day" class="calendar__table-header">
            {{ day }}
          </th>
        </tr>
        <div class="calendar__line"></div>
      </thead>
      <tbody>
        <tr v-for="(week, weekIndex) in calendar" :key="weekIndex">
          <td
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            :class="{
              today: isToday(day),
              selected: isSelected(day),
              grayed: isNowMonth(day),
            }"
            @click="selectDate(day)"
            class="calendar__table-cell"
          >
            <p>{{ day.getDate() }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";

export default {
  components: {
    CustomButton,
    CustomSelect,
  },
  props: {
    selectedDate: String,
  },
  data() {
    return {
      currentMonthName: null,
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      monthOptions: [
        { name: "Январь" },
        { name: "Февраль" },
        { name: "Март" },
        { name: "Апрель" },
        { name: "Май" },
        { name: "Июнь" },
        { name: "Июль" },
        { name: "Август" },
        { name: "Сентябрь" },
        { name: "Октябрь" },
        { name: "Ноябрь" },
        { name: "Декабрь" },
      ],
      dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    };
  },
  computed: {
    yearRange() {
      const currentYear = new Date().getFullYear();
      const range = [];

      for (let i = currentYear - 10; i <= currentYear + 9; i++) {
        range.push({ key: i, name: i });
      }
      return range;
    },

    calendar() {
      const firstDay = new Date(
        this.currentYear,
        this.currentMonth,
        1
      ).getDay();
      const lastDay = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();

      const weeks = [];
      let week = [];

      for (let i = firstDay - 1; i >= 0; i--) {
        const date = new Date(this.currentYear, this.currentMonth, -i);
        week.push(date);
      }

      for (let i = 1; i <= lastDay; i++) {
        const date = new Date(this.currentYear, this.currentMonth, i);
        week.push(date);
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
      }

      let lastDayWeek;
      for (let i = 1; week.length < 7; i++) {
        const date = new Date(this.currentYear, this.currentMonth + 1, i);
        week.push(date);
        lastDayWeek = i;
      }
      weeks.push(week);

      week = [];
      for (let i = 1; i <= 7; i++) {
        const date = new Date(
          this.currentYear,
          this.currentMonth + 1,
          i + lastDayWeek
        );
        week.push(date);
      }
      weeks.push(week);

      return weeks;
    },
  },

  methods: {
    updateCalendarMonth() {
      this.currentMonth = this.monthOptions.indexOf(this.currentMonthName);
    },
    previousMonth() {
      if (this.currentMonth == 0) {
        this.currentYear--;
        this.currentMonth = 11;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth == 11) {
        this.currentYear++;
        this.currentMonth = 0;
      } else {
        this.currentMonth++;
      }
    },
    isToday(day) {
      const today = new Date();
      return (
        day.getDate() == today.getDate() &&
        day.getMonth() == today.getMonth() &&
        day.getFullYear() == today.getFullYear()
      );
    },
    isSelected(day) {
      let data = new Date(this.selectedDate);
      if (data != null) {
        return (
          day.getDate() == data.getDate() &&
          day.getMonth() == data.getMonth() &&
          day.getFullYear() == data.getFullYear()
        );
      }
      return false;
    },
    selectDate(day) {
      if (
        day.getMonth() == this.currentMonth &&
        day.getFullYear() == this.currentYear
      ) {
        this.$emit(
          "dateSelected",
          new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)
            .toISOString()
            .split("T")[0]
        );
      }
    },
    isNowMonth(day) {
      return this.currentMonth != day.getMonth();
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>