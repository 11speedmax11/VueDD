<template>
  <div class="main">
    <div class="profile">
      <div class="profile__image">
        <div class="profile__img">
          <img
            :src="getAvatarImg()"
            alt="аватарка пользователя"
            width="300px"
            height="300px"
          />
        </div>
      </div>
      <div class="profile__body">
        <div class="profile__header">
          <div class="profile__title">
            <div class="profile__name">{{ currentUser.name || "" }}</div>
            <div class="profile__status">{{ currentUser.status == "ACTIVE" ? "Активен"  : currentUser.status == "BLOCKED" ? "Заблокирован" : 'Удален'  }}</div>
          </div>
          <div class="profile__dropdownmenu">
            <DropDownButton
              :classButton="'card__icon'"
              icon="dots"
              xClass="card__svg"
              @editPass="editPass"
              @editProfile="editProfile"
              @openTasks="openTasks"
              :buttonsArr="[
                {
                  buttonStyle: 'dropDown',
                  classButton: 'profile__edit',
                  click: 'editProfile',
                  title: 'Редактировать',
                },
                {
                  buttonStyle: 'dropDown',
                  classButton: 'profile__password',
                  click: 'editPass',
                  title: 'Изменить пароль',
                },
                {
                  buttonStyle: 'dropDown',
                  classButton: 'profile__tasks',
                  click: 'openTasks',
                  title: 'Просмотр задач пользователя',
                },
              ]"
            ></DropDownButton>
          </div>
        </div>
        <div class="profile__about">
          <div class="profile__myself">О себе:</div>
          <div class="profile__text">
            {{ currentUser.description || "" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import { requests } from "@/requests";
import { mapActions } from "vuex";
export default {
  name: "UserProfile",
  components: {
    DropDownButton,
  },
  props: {
    id: String,
  },
  data() {
    return {
      currentUser: {},
    };
  },
  methods: {
    ...mapActions("app", ["setCurrentModal"]),
    ...mapActions("task", ["setUserTasks"]),
    getCurrentUser() {
      requests
        .getUserList({
          page: 1,
          limit: 1,
          filter: { _id: this.id },
          sort: "asc",
        })
        .then((userList) => {
          this.currentUser = userList.users[0];
        }).catch(() => {
          this.$router.push({name: "NotFound"})
        });
    },
    editProfile() {
      this.$router.push({
        name: "CreateUser",
        params: {
          isEdit: true,
          user: this.currentUser,
        },
      });
    },
    editPass() {
      this.setCurrentModal({
        isOpen: true,
        componentName: "EditPassModal",
        titleModal: "Изменение пароля",
         nameButton: "Изменение пароля",
        action: (pass) => {
          requests.editPass({
            _id: this.currentUser._id,
            password: pass,
          });
        },
      });
    },
    openTasks() {
      this.setUserTasks({ author: this.currentUser._id });
      this.$router.push({ name: "TaskList"});
    },
    getAvatarImg() {
      return requests.getAvatar(this.currentUser.picture);
    },
  },
  mounted() {
    this.getCurrentUser();
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>