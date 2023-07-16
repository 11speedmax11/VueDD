<template>
  <section class="empty-list">
    <p class="empty-list__text">{{ textPlug }}</p>
    <CustomButton classButton="empty-list__button" @click="click">
      Добавить</CustomButton
    >
  </section>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  name: "PlugCards",

  props: {
    name: String,
    textPlug: String,
  },
  components: {
    CustomButton,
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>