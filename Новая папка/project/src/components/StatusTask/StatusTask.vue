<template>
  <span class="card__status" :class="getColor()">{{ statusName[this.name] }}</span>
</template>

<script>
import { statusName } from "@/const";
export default {
  props: {
    name: String,
  },
  data() {
    return {
      color: null,
      statusName,
    };
  },
  methods: {
    getColor() {
      switch (statusName[this.name]) {
        case "Черновик":
        case "В работе":
        case "Тестирование":
          return "brown";
        case "Завершена":
        case "Выполнена":
        case "Закрыта":
          return "blue";
        case "Удалена":
          return "red";
      }
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>