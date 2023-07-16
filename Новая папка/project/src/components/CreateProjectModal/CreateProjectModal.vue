<template>
  <div class="create-project-modal">
    <div class="create-project-modal__wrapper">
      <div
        class="authorization__login"
        :class="{ 'create-project-modal__erorre-field': errorLoginMess }"
      >
        <p>Код <span class="create-project-modal__star">*</span></p>
        <InputField v-model="formData.code" />
      </div>
      <div
        class="authorization__password"
        :class="{ 'create-project-modal__erorre-field': errorLoginMess }"
      >
        <p>Название <span class="create-project-modal__star">*</span></p>
        <InputField v-model="formData.name" />
      </div>
    </div>
    <div class="create-project-modal__footer">
      <CustomButton buttonStyle="secondary" @click="cancle"
        >отмена</CustomButton
      >
      <CustomButton @click="accept">{{ currentModal.nameButton }}</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";
export default {
  props: {
    nameButton: String,
    currentModal: Object,
  },
  components: {
    CustomButton,
    InputField,
  },
  mounted() {
    if (this.currentModal.projectData) {
      this.formData.code = this.currentModal.projectData.code;
      this.formData.name = this.currentModal.projectData.name;
    }
  },
  computed: {},
  data() {
    return {
      formData: {
        code: null,
        name: null,
      },
      errorLoginMess: null,
    };
  },

  methods: {
    accept() {
      if (this.formData.code && this.formData.name) {
        this.$emit("acceptAction", this.formData);
      } else {
        this.errorLoginMess = "Поля обязательны для заполнения";
      }
    },
    cancle() {
      this.$emit("cancle");
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
