<template>
  <div class="user" @click="$emit('click')">
    <img :class="imgClass" :src="getAvatarImg()" width="24px" height="24px" />
    <p class="user__name">{{ getName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
import { requests } from "@/requests";
export default {
  props: {
    id: String,
    imgClass: String,
  },

  computed: {
    ...mapGetters("app", ["userList"]),

    getName() {
      let parts = (this.currentUser().name || "Удален").split(" ");
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
    },
  },
  methods: {
    currentUser() {
      let user = _.cloneDeep(this.userList).find((x) => x._id == this.id);
      if (user) {
        return user;
      } else {
        requests
          .getUserList({
            page: 1,
            limit: 1,
            filter: { _id: this.id },
            sort: "asc",
          })
          .then((userList) => {
            return userList.users[0];
          });
        return "Удален";
      }
    },
    getAvatarImg() {
      return requests.getAvatar(this.currentUser().picture);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
