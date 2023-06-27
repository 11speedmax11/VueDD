<template>
  <section class="empty-list">
    <p class="empty-list__text">Не создан ни один проект</p>
    <CustomButton classButton="empty-list__button"> Добавить</CustomButton>
  </section>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  name: "PlugCards",

  props: {
    name: String,
  },
  components: {
    CustomButton,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>