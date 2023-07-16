<template>
  <div class="main">
    <div
      class="user-list"
      v-if="(userList && userList.length != 0) || search != null"
    >
      <div class="user-list__search">
        <InputField
          placeholder="Поиск..."
          :isClear="true"
          :isSearch="true"
          v-model="searchText"
          @search="setValueSearch"
        />
        <CustomButton
          :class="{ isTurn: sortOrder == 'asc' }"
          xClass="svg__sort"
          icon="sort-up"
          buttonStyle="secondary"
          @click="turnIcon"
        />
        <CustomButton
          classButton="user-list__add"
          @click="addUser"
          v-if="isAdmin"
        >
          Добавить
        </CustomButton>
      </div>
      <div v-if="this.userList && this.userList.length != 0">
        <div class="user-list__item" v-for="user in userList" :key="user._id">
          <UserElement :id="user._id" @click="openProfile(user._id)" />
          <div class="user-list__menu" v-if="isCurrentUser(user._id)">
            <DropDownButton
              :classButton="'card__icon'"
              icon="dots"
              xClass="card__svg"
              @edit="editUser(user)"
              @delete="deleteUser(user)"
              :buttonsArr="[
                {
                  buttonStyle: 'dropDown',
                  classButton: 'card__edit',
                  click: 'edit',
                  title: 'Редактировать',
                },
                {
                  buttonStyle: 'dropDown',
                  classButton: 'card__delete',
                  click: 'delete',
                  title: 'Удалить',
                },
              ]"
            >
            </DropDownButton>
          </div>
        </div>
        <PaginationItems
          :total="pages"
          :currentPage="page"
          @goPage="goPage"
          @goNextPage="goNextPage"
          @goPreviousPage="goPreviousPage"
          v-if="pages != 1"
        />
      </div>
      <div class="user-list__plug" v-else>
        <p>Ни один пользователь не соответствует результатам поиска</p>
      </div>
    </div>
    <PlugCards textPlug="Нет ни одного пользователя" @click="addUser" v-else />
  </div>
</template>
<script>
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import UserElement from "@/components/UserElement/UserElement.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
import PaginationItems from "@/components/PaginationItems/PaginationItems.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import { mapGetters, mapActions } from "vuex";
import { requests } from "@/requests";
import _ from "lodash";

export default {
  components: {
    UserElement,
    InputField,
    CustomButton,
    PaginationItems,
    DropDownButton,
    PlugCards,
  },
  data() {
    return {
      userList: [],
      pages: 1,
      searchText: null,
    };
  },
  mounted() {
    this.start();
  },
  computed: {
    ...mapGetters("user", ["search", "sortOrder", "page"]),
    ...mapGetters("app", ["currentUser"]),
    sortOrderValue() {
      return this.sortOrder;
    },
    isAdmin() {
      if (this.currentUser.roles.includes("ADMIN")) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions("user", ["setSearch", "setSortOrder", "setPage"]),
    ...mapActions("app", ["setLoading", "setUserList"]),

    setValueSearch(value) {
      this.setPage(1);
      this.setSearch(value);
      this.getUserList();
    },
    turnIcon() {
      this.setPage(1);
      this.setSortOrder(this.sortOrder == "desc" ? "asc" : "desc");
      this.getUserList();
    },
    start() {
      this.getUserList();
    },
    getUserList() {
      this.setLoading(true);
      requests
        .getUserList({
          page: this.page,
          limit: 10,
          filter: {
            name: this.search,
          },
          sort: this.sortOrder,
        })
        .then((data) => {
          this.pages = data.total;
          this.userList = _.cloneDeep(data.users);
          this.setUserList(_.cloneDeep(data.users));
        })
        .finally(() => {
          this.setLoading(false);
        });
    },
    goPreviousPage() {
      this.goPage(this.page - 1);
    },
    goNextPage() {
      this.goPage(this.page + 1);
    },
    goPage(page) {
      this.setPage(page);
      this.getUserList();
    },
    addUser() {
      this.$router.push(`/CreateUser`);
    },
    editUser(user) {
      this.$router.push({
        name: "CreateUser",
        params: {
          isEdit: true,
          user: user,
        },
      });
    },
    deleteUser(user) {
      requests.deleteUser({
        _id: user._id,
        status: "DELETED",
      });
    },
    openProfile(id) {
      let path = `/UserProfile/${id}`;
      this.$router.push(`${path}`);
    },
    isCurrentUser(id) {
      if (id == this.currentUser._id || this.isAdmin) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>