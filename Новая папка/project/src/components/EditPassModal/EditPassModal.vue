<template>
  <div class="create-project-modal">
    <div class="create-project-modal__wrapper">
      <div class="authorization__login">
        <p> Новый пароль<span>*</span></p>
        <InputField v-model="pass" />
      </div>
      <div class="authorization__password">
        <p>Название<span>*</span></p>
        <InputField  />
      </div>
    </div>
    <div class="create-project-modal__footer">
      <CustomButton buttonStyle="secondary" @click="cancle">отмена</CustomButton>
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
    currentModal: Object
  },
  components: {
    CustomButton,
    InputField,
  },
  mounted() {
  },
  computed: {},
  data() {
    return {
      pass: null
    };
  },

  methods: {
    accept() {
      this.$emit("acceptAction", this.pass);
    },
    cancle(){
      this.$emit("cancle")
    }
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
