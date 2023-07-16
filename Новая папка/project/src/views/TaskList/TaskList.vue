<template>
  <div class="main">
    <div class="task__list" v-if="isEmpty || this.taskList && this.taskList.length != 0">
      <div class="task__search">
        <InputField
          @search="setValueSearch"
          placeholder="Поиск..."
          v-model="searchText"
          :isClear="true"
          :isSearch="true"
        />

        <FilterValues
          :filter="filterValue"
          @applyFilter="applyFilter"
          :statusList="status"
          :userList="userList"
        />
        <CustomSelect
          class="task__select"
          :options="sortName"
          :selectedOption="sortField"
          :isSearch="true"
          :isTurn="sortOrderValue"
          @input="sortOrder"
          @turnIcon="turnIcon"
        >
        </CustomSelect>
        <CustomButton
          buttonStyle="secondary"
          classButton="task__add"
          @click="click"
        >
          Добавить
        </CustomButton>
      </div>
      <div v-if="!isEmpty">
        <CardsItem
          v-for="item in taskList"
          :key="item._id"
          :item="item"
          isTask
          :classImg="'card__img'"
          @delet="deletTask(item)"
          @edit="editTask(item)"
        />
        <PaginationItems
          :total="pages"
          :currentPage="page"
          @goPage="goPage"
          @goNextPage="goNextPage"
          @goPreviousPage="goPreviousPage"
          v-if="pages != 1"
        />
      </div>
      <div class="task__plug" v-else>
        <p>Ни одна задача не соответствует результатам поиска/фильтрации</p>
      </div>
    </div>
    <PlugCards :textPlug="'Не создана ни одна задача'" @click="click" v-else />
  </div>
</template>
<script>
import CardsItem from "@/components/CardsItem/CardsItem.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import FilterValues from "@/components/FilterValues/FilterValues.vue";
import PaginationItems from "@/components/PaginationItems/PaginationItems.vue";
import { mapGetters, mapActions } from "vuex";
import { requests } from "@/requests";
import { sortName, statusName } from "@/const";
import _ from "lodash";

export default {
  props: {},
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
    CustomSelect,
    FilterValues,
    PaginationItems,
  },
  data() {
    return {
      taskList: null,
      sortName,
      status: null,
      userList: [],
      pages: 1,
      searchText: null,
    };
  },
  mounted() {
    this.start();
  },
  computed: {
    ...mapGetters("task", [
      "filter",
      "name",
      "sortField",
      "sortOrder",
      "page",
    ]),
    filterValue() {
      return this.filter;
    },
    sortOrderValue() {
      return this.sortOrder == "asc" ? true : false;
    },
    isEmpty() {
      if (this.taskList && this.taskList.length == 0 && !this.isEmptyFilter()) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions("task", [
      "setFilter",
      "setName",
      "setSortField",
      "setSortOrder",
      "setPage",
    ]),
    ...mapActions("app", ["setLoading", "setCurrentModal", "setUserList"]),
    start() {
      this.searchText = this.name;
      requests
        .getStatus()
        .then((status) => {
          this.status = status.map((x) => {
            return {
              key: x,
              name: statusName[x],
            };
          });
        })
        .catch(() => {})
        .finally(() => {
          this.searchTasks();
        });
      requests
        .getUserList({
          page: 1,
          limit: 200,
          filter: null,
          sort: "asc",
        })
        .then((usersList) => {
          this.userList = _.cloneDeep(usersList.users);
          this.setUserList(_.cloneDeep(usersList.users));
        });
    },
    isEmptyFilter() {
      for (let key in this.filter) {
        if (this.filter[key] !== null) {
          return false;
        }
      }
      return true;
    },
    searchTasks() {
      this.setLoading(true);
      let data = {
        page: this.page,
        limit: 10,
        filter: this.filter,
        sort: {
          field: this.sortField,
          type: this.sortOrder,
        },
      };
      return requests
        .getTasks(data)
        .then((response) => {
          this.taskList = response.tasks;
          this.pages = response.total;
        })
        .finally(() => {
          this.setLoading(false);
        });
    },
    click() {
      this.$router.push(`TaskList/CreateTask`);
    },
    setValueSearch(value) {
      this.setPage(1);
      this.setName(value);
      this.searchTasks();
    },
    sortOrder(value) {
      this.setPage(1);
      this.setSortField(value);
      this.searchTasks();
    },
    applyFilter(value) {
      this.setPage(1);
      let valueFilter = value;
      valueFilter.name = this.searchText;
      this.setFilter(valueFilter);
      this.searchTasks();
    },
    turnIcon(value) {
      this.setPage(1);
      this.setSortOrder(value ? "asc" : "desc");
      this.searchTasks();
    },
    goPreviousPage() {
      this.goPage(this.page - 1);
    },
    goNextPage() {
      this.goPage(this.page + 1);
    },
    goPage(page) {
      this.setPage(page);
      this.searchTasks();
    },
    editTask(item) {
      this.$router.push({
        name: "EditTask",
        params: {
          taskData: item,
        },
      });
    },
    deletTask(item) {
      this.setCurrentModal({
        isOpen: true,
        componentName: "DeleteTaskModal",
        titleModal: "Удаление",
        projectName: item,
        nameButton: "Да",
        action: (item) => {
          requests.deleteTask(item._id).then(() => this.searchTasks());
        },
      });
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>