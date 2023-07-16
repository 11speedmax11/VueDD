<template>
  <div class="create-project-modal">
    <div class="create-project-modal__wrapper">
      Вы уверены что хотите удалить {{currentModal.projectName.projectId? "задачу": "проект"}} «{{currentModal.projectName.name}}»?
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
export default {
  props: {
    currentModal: Object
  },
  components: {

    CustomButton,
  },
  computed: {},
  data() {
    return {
      formData: {
        code: null,
        name: null,
      },
    };
  },

  methods: {
    accept() {
      this.$emit("acceptAction",this.currentModal.projectName);
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
