<template>
  <div id="app">
    <router-view></router-view>
    <PreloaderCircle v-if="loading"></PreloaderCircle>
    <ModalBase v-if="currentModal.isOpen" />
  </div>
</template>

<script>
import ModalBase from "@/components/ModalBase/ModalBase.vue";
import PreloaderCircle from "@/components/PreloaderCircle/PreloaderCircle.vue";
import { mapGetters, mapActions } from "vuex";
import { requests } from "@/requests";

export default {
  components: {
    ModalBase,
    PreloaderCircle,
  },

  mounted() {
    if (this.tokenUser) {
      requests.getCurrentUser()
      .then((data) => {
        this.setCurrentUser(data);
      });
    } else {
      this.$router.push("AuthPage");
    }
  },
  computed: {
    ...mapGetters("app", ["loading", "currentModal"]),
    tokenUser() {
      return localStorage.getItem("tokenUser")
    }
  },
  methods: {
    ...mapActions("app", ["setCurrentModal", "setCurrentUser"]),
  },
};
</script>

<style lang="scss" >
@import "@/scssVars.scss";
</style>
