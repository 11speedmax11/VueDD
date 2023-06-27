<template>
  <header class="header">
    <nav class="navigation">
      <CustomButton classButton="navigation__item"> Проекты </CustomButton>
      <CustomButton classButton="navigation__item"> Задачи </CustomButton>
      <CustomButton classButton="navigation__item"> Пользователи </CustomButton>
    </nav>
    <DropDownButton
      :imgClass="'header__img'"
      :classButton="'header__button'"
      icon="vector"
      xClass="header__svg"
    >
      <CustomButton classButton="header__profile">Профиль</CustomButton>
      <CustomButton classButton="header__exit">Выход</CustomButton>
    </DropDownButton>
  </header>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";

export default {
  name: "NavigationMenu",
  components: {
    CustomButton,
    DropDownButton,
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
