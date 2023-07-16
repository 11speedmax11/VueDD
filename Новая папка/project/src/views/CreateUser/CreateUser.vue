<template>
  <div class="main">
    <div class="create-user">
      <div class="create-user__wrapper">
        <header class="create-user__header">
          {{
            isEdit ? "Редактирование профиля" : "Создание профиля сотрудника"
          }}
        </header>

        <div class="create-user__line"></div>
        <div class="create-user__body">
          <section>
            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">ФИО <span class="create-user__star">*</span></div>
              </div>
              <div
                class="create-user__value"
                :class="{ 'create-user__erorre-field': errorLoginMess }"
              >
                <InputField
                  v-model="name"
                  :placeholder="'Введите ФИО'"
                ></InputField>
              </div>
            </div>

            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">
                  Логин <span class="create-user__star">*</span>
                </div>
              </div>
              <div
                class="create-user__value"
                :class="{ 'create-user__erorre-field': errorLoginMess }"
              >
                <InputField
                  v-model="login"
                  :placeholder="'Введите логин'"
                  v-if="!isEdit"
                ></InputField>
                <p v-else>{{ user.login }}</p>
              </div>
            </div>

            <div class="create-user__field" v-if="!isEdit">
              <div class="create-user__title">
                <div class="">
                  Пароль <span class="create-user__star">*</span>
                </div>
              </div>
              <div
                class="create-user__value"
                :class="{ 'create-user__erorre-field': errorLoginMess }"
              >
                <InputField
                  v-model="password"
                  :placeholder="'Введите пароль'"
                ></InputField>
              </div>
            </div>

            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">О себе</div>
              </div>
              <div class="create-user__value">
                <TextArea
                  class="create-user__textarea"
                  placeholder="Введите текст"
                  v-model="about"
                />
              </div>
            </div>

            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">Фото</div>
              </div>
              <div class="create-user__value">
                <CustomPhoto @selectedPhoto="handleFileUpload" />
              </div>
            </div>
          </section>

          <section>
            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">Активен</div>
              </div>
              <ValueSwitch :isActive="isActive" @switched="switched" />
            </div>
            <div class="create-user__field">
              <div>
                <div>
                  <input type="radio" v-model="selectedRole" value="USER" />
                  Пользователь
                </div>
                <div class="create-user__role">
                  <input type="radio" v-model="selectedRole" value="ADMIN" />
                  Администратор
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="create-user__line"></div>
        <div class="create-user__buttons">
          <CustomButton
            buttonStyle="secondary"
            classButton="create-user__back"
            @click="cancel"
          >
            Отмена
          </CustomButton>
          <CustomButton classButton="create-user__create" @click="processUser">
            {{ isEdit ? "Сохранить изменения" : "Создать профиль" }}
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";
import ValueSwitch from "@/components/ValueSwitch/ValueSwitch.vue";
import TextArea from "@/components/TextArea/TextArea.vue";
import CustomPhoto from "@/components/CustomPhoto/CustomPhoto.vue";
import { requests } from "@/requests";

export default {
  components: {
    CustomButton,
    InputField,
    ValueSwitch,
    TextArea,
    CustomPhoto,
  },
  props: {
    isEdit: Boolean,
    user: Object,
  },
  data() {
    return {
      name: "",
      login: "",
      password: "",
      about: "",
      photo: null,
      selectedRole: "USER",
      isActive: true,
      errorLoginMess: null,
    };
  },
  mounted() {
    if (this.isEdit) {
      this.name = this.user.name;
      this.about = this.user.description;
      this.isActive = this.user.status == "ACTIVE";
    }
  },
  methods: {
    handleFileUpload(event) {
      this.photo = event;
    },

    processUser() {
      if (
        this.name &&
        (this.login || this.isEdit) &&
        (this.password || this.isEdit)
      ) {
        if (this.isEdit) {
          const promisses = [this.editUser(this.user)];

          if (this.photo) {
            promisses.push(this.addPhoto(this.user));
          }
          if (this.user.status != this.isActive ? "ACTIVE" : "BLOCKED") {
            promisses.push(this.changeStatus(this.user));
          }
          Promise.all(promisses).then(() => {
            this.$router.go(-1);
          });
        } else {
          this.createUser();
          this.$router.push({ name: "UserList" });
        }
      } else {
        this.errorLoginMess = "Поля обязательны для заполнения";
      }
    },

    createUser() {
      requests
        .addUser({
          name: this.name,
          login: this.login,
          password: this.password,
        })
        .then((data) => {
          this.editUser(data);
          this.addPhoto(data);
          this.changeStatus(data);
        });
    },

    editUser(data) {
      return requests.editUser({
        _id: data._id,
        name: this.name,
        description: this.about,
        roles: this.selectedRole,
      });
    },

    addPhoto(data) {
      const formData = new FormData();
      formData.append("picture", this.photo);
      formData.append("_id", data._id);
      return requests.addPhoto(formData);
    },

    cancel() {
      this.$router.go(-1);
    },
    changeStatus(data) {
      return requests.deleteUser({
        _id: data._id,
        status: this.isActive ? "ACTIVE" : "BLOCKED",
      });
    },
    switched() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>