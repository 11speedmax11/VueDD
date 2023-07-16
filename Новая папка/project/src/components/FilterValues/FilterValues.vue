<template>
  <div class="filter" v-click-outside="closeFilter">
    <div
      class="filter__wrapper"
      :class="{ active: isDropdownOpen }"
      @click="toggleDropdown"
    >
      <CustomButton
        xClass="svg__filter"
        icon="filter"
        buttonStyle="secondary"
      />
    </div>
    <div class="filter__selection" v-if="isDropdownOpen">
      <div class="filter__value">
        <p>Статус</p>
        <CustomSelectMulti
          :options="statusList"
          :optionsName="statusName"
          :selectedOption="filterValue.status"
          @optionSelected="statusSelected"
          placeholder="Выберите значение..."
        />
        <p>Автор</p>
        <CustomSelect
          :options="userList"
          :selectedOption="filterValue.author"
          keyName="_id"
          @input="authorSelected"
          placeholder="Выберите значение..."
        />
        <p>Исполнитель</p>
        <CustomSelect
          :options="userList"
          :selectedOption="this.filterValue.executor"
          keyName="_id"
          @input="executorSelected"
          placeholder="Выберите значение..."
        />
        <p>Дата создания</p>
        <div class="filter__dates">
          <DateSelection
            :selectedDate="this.filterValue.dateStart"
            @dateSelected="dateSelectedStart"
          />
          <p>-</p>
          <DateSelection
            :selectedDate="this.filterValue.dateEnd"
            @dateSelected="dateSelectedEnd"
          />
        </div>
      </div>
      <div class="filter__buttons">
        <CustomButton @click="clearFields" buttonStyle="secondary"
          >Отчистить</CustomButton
        >
        <CustomButton @click="ApplyFilter">Применить</CustomButton>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomSelectMulti from "@/components/CustomSelectMulti/CustomSelectMulti.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import DateSelection from "@/components/DateSelection/DateSelection.vue";
import { statusName } from "@/const";

export default {
  props: {
    statusList: Array,
    placeholder: {
      type: String,
      default: "Дата...",
    },
    filter: {
      type: Object,
      default: () => {
        return {
          status: [],
          author: null,
          executor: null,
          dateStart: null,
          dateEnd: null,
        };
      },
    },
    userList: Array,
  },  
  data() {
    return {
      isDropdownOpen: false,
      selectedDate: null,
      authorList: ["Галанов М.Э.", "Иванов М.Э."],
      executorList: ["Галанов М.Э.", "Иванов М.Э."],


      filterValue: {
        status: this.filter.status,
        author: this.filter.author,
        executor: this.filter.executor,
        dateStart: this.filter.dateStart,
        dateEnd: this.filter.dateEnd,
      },
      statusName
    };
  },
  computed: {},
  components: {
    CustomButton,
    CustomSelectMulti,
    CustomSelect,
    DateSelection,
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeFilter() {
      this.isDropdownOpen = false;
    },
    clearFields() {
      this.filterValue.status = [];
      this.filterValue.author = null;
      this.filterValue.executor = null;
      this.filterValue.dateStart = null;
      this.filterValue.dateEnd = null;

      this.$emit("applyFilter", {});
      
    },
    statusSelected(arr) {
      this.filterValue.status = [...arr];
    },
    authorSelected(author) {
      this.filterValue.author = author;
    },
    executorSelected(executor) {
      this.filterValue.executor = executor;
    },
    dateSelectedStart(date) {
      this.filterValue.dateStart = date;
    },
    dateSelectedEnd(date) {
      this.filterValue.dateEnd = date;
    },
    ApplyFilter() {
      let filterCopy = { ...this.filterValue };
      this.$emit("applyFilter", filterCopy);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>