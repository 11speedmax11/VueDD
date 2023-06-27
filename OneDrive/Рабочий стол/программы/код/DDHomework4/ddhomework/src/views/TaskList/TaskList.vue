<template>
  <div class="main">
    <div class="project" v-if="taskList && taskList.length != 0">
      <CardsItem v-for="item in taskList" :key="item._id" :item="item" />
    </div>
    <PlugCards v-else />
  </div>
</template>
<script>
import CardsItem from "@/components/CardsItem/CardsItem.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
export default {
  name: "TaskList",
  props: {
    taskList: Array,
  },
  components: {
    CardsItem,
    PlugCards,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>