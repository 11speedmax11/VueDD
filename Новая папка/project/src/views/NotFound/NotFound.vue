<template>
  <div class="not-found">
    <div class="not-found__wrapper">
      <p>Упс! Страница не найдена.</p>
      <CustomButton classButton="not-found__button" @click="openTaskList"
        >Перейти на главную страницу</CustomButton
      >
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
  methods: {
    openTaskList() {
      this.$router.push(`TaskList`);
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>