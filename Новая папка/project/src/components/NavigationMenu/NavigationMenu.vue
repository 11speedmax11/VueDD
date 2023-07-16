<template>
  <div>
    <header class="header">
      <nav class="navigation">
        <CustomButton
          :class="{ active: isActive('ProjectList') }"
          buttonStyle="navigation"
          classButton="navigation__item"
          @click="selectTab('ProjectList')"
          >Проекты</CustomButton
        >
        <CustomButton
          :class="{ active: isActive('TaskList') }"
          buttonStyle="navigation"
          classButton="navigation__item"
          @click="selectTab('TaskList')"
          >Задачи</CustomButton
        >
        <CustomButton
          :class="{ active: isActive('UserList') }"
          buttonStyle="navigation"
          classButton="navigation__item"
          @click="selectTab('UserList')"
          >Пользователи</CustomButton
        >
      </nav>
      <DropDownButton
        :class="{ active: isActive('UserProfile') }"
        :imgClass="'header__img'"
        :classButton="'header__button'"
        :avatarImg="getAvatarImg()"
        icon="vector"
        xClass="header__svg"
        @openProfile="openProfile"
        @openAuthorization="openAuthorization"
        :buttonsArr="[
          {
            buttonStyle: 'dropDown',
            classButton: 'header__profile',
            click: 'openProfile',
            title: 'Профиль',
          },
          {
            buttonStyle: 'dropDown',
            classButton: 'header__exit',
            click: 'openAuthorization',
            title: 'Выход',
          },
        ]"
      >
      </DropDownButton>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import { mapGetters, mapActions } from "vuex";
import { requests } from "@/requests";
export default {
  name: "NavigationMenu",
  components: {
    CustomButton,
    DropDownButton,
  },
  computed: {
    ...mapGetters("app", ["currentUser"]),
  },
  methods: {
    ...mapActions("app", ["setCurrentUser"]),
    selectTab(tab) {
      this.$emit("tabSelected", tab);
      this.$router.push(`/${tab}`);
    },
    openAuthorization() {
      localStorage.setItem("isAuthorized", false);
      localStorage.setItem("tokenUser", null);
      this.setCurrentUser(null);
      this.$router.push(`/AuthPage`);
    },
    isActive(routerString) {
      return this.$route.path.split("/")[1] == `${routerString}`;
    },
    openProfile() {
      let path = `UserProfile/${this.currentUser._id}`;
      this.selectTab(path);
    },
    getAvatarImg() {
      return requests.getAvatar((this.currentUser || {}).picture);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
