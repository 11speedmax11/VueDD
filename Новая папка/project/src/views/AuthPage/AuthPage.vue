<template>
  <div class="authorization">
    <div class="authorization__wrapper">
      <div class="authorization__header">
        <p>Вход</p>
      </div>
      <div class="authorization__input">
        <span v-if="errorLoginMess" class="authorization__erorre">{{
          errorLoginMess
        }}</span>
        <div
          class="authorization__login"
          :class="{ 'authorization__erorre-field': errorLoginMess }"
        >
          <p>Логин<span>*</span></p>
          <InputField :value="login" @input="loginChange" />
        </div>
        <div
          class="authorization__password"
          :class="{ 'authorization__erorre-field': errorLoginMess }"
        >
          <p>Пароль<span>*</span></p>
          <InputField :value="password" @input="passwordChange" />
        </div>
      </div>
      <div class="authorization__entry">
        <CustomButton @click="openTaskList">Войти</CustomButton>
      </div>
    </div>
  </div>
</template> 
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";
import { requests, updateHeaders } from "@/requests";
import { mapActions } from "vuex";
export default {
  components: {
    CustomButton,
    InputField,
  },
  data() {
    return {
      login: null,
      password: null,

      errorLoginMess: null,
    };
  },
  methods: {
    ...mapActions("app", ["setCurrentUser"]),
    passwordChange(val) {
      this.password = val;
      this.errorLoginMess = null;
    },
    loginChange(val) {
      this.login = val;
      this.errorLoginMess = null;
    },
    openTaskList() {
      if (!this.login || !this.password) {
        this.errorLoginMess = "Поля обязательны для заполнения";
      } else {
        requests
          .getUser({ login: this.login, password: this.password })
          .then((response) => {
            localStorage.setItem("isAuthorized", true);
            localStorage.setItem("tokenUser", response.token);
            updateHeaders();

            if (response.token) {
              requests.getCurrentUser().then((data) => {
                this.setCurrentUser(data);
                this.$router.push(`TaskList`);
              });
            } else {
              this.errorLoginMess = response;
            }
          });
      }
    },
    searchTasks() {},
  },
};
</script> 
 
<style lang="scss" scoped>
@import "./index.scss";
</style>
