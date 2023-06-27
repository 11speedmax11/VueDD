<template>
  <div class="main">
    <div class="project" v-if="projectList && projectList.length != 0">
      <CardsItem
        v-for="item in projectList"
        :key="item._id"
        :item="item"
        :classImg="'card__img'"
      />
    </div>
    <PlugCards v-else/>
  </div>
</template>
<script>
import CardsItem from "@/components/CardsItem/CardsItem.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
export default {
  props: {
    projectList: Array,
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