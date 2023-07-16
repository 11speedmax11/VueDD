<template>
  <section class="card">
    <ul class="card__list">
      <li class="card__item">
        <div class="card__base">
          <div class="card__head">
            <p class="card__name" @click="openCard(item._id)">
              {{ item.name }}
            </p>
            <img
              :class="classImg"
              src="@/assets/images/profilPicture.png"
              alt="Аватар исполнителя"
              v-if="classImg"
            />
          </div>

          <div class="card__body">
            <p class="card__content">
              <span class="card__number">{{ item.code || item.number }}</span
              >{{ userName(item.author) }} создал {{ timeCreat }}
              <StatusTask :name="item.status" v-if="item.status" />
            </p>
            <p class="card__chang" v-if="item.dateEdited">
              {{ userName(item.executor) }} изменил {{ timeEdit }}
            </p>
          </div>
        </div>
        <div class="card__menu" v-if="isAuthor">
          <DropDownButton
            :classButton="'card__icon'"
            icon="dots"
            xClass="card__svg"
            @edit="$emit('edit')"
            @delete="$emit('delet')"
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
      </li>
    </ul>
  </section>
</template>
<script>
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import StatusTask from "@/components/StatusTask/StatusTask.vue";
import { mapGetters } from "vuex";
import _ from "lodash";

export default {
  name: "CardsItem",
  props: {
    item: Object,
    classImg: String,
    isTask: Boolean,
  },
  components: {
    DropDownButton,
    StatusTask,
  },
  computed: {
    ...mapGetters("app", ["userList", "currentUser"]),

    timeCreat() {
      return this.getDate(this.item.dateCreated);
    },
    timeEdit() {
      return this.getDate(this.item.dateEdited);
    },
    isAuthor() {
      return (
        this.item.author == this.currentUser._id ||
        this.currentUser.roles.includes("ADMIN")
      );
    },
  },
  methods: {
    openCard(id) {
      if (this.isTask) {
        this.$router.push({
          path: `TaskList/${id}`,
          params: {
            taskData: this.item,
          },
        });
      }
    },

    userName(userObj) {
      let user = _.cloneDeep(this.userList || []).find((x) => x._id == userObj);
      if (user) {
        let parts = (user.name || "").split(" ");
        let lastName = parts[0];
        let firstName = "";
        if (parts.length > 1) {
          firstName = parts[1].charAt(0).toUpperCase() + ".";
        }

        let patronymic = "";

        if (parts.length > 2) {
          patronymic = parts[2].charAt(0).toUpperCase() + ".";
        }
        return lastName + " " + firstName + patronymic;
      }
      return "";
    },

    getDate(dateString) {
      const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ];

      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${day} ${month} ${year} в ${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }`;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>