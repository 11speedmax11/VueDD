<template>
  <div class="main">
    <InputField :value="searchText" @input="changeSearch" />
  </div>
</template>
<script>
import InputField from "@/components/InputField/InputField.vue";

export default {
  components: {
    InputField,
  },
  data() {
    return {
      searchText: "nullwerwere",
    };
  },
  methods: {
    changeSearch(val) {
      console.log(val);
      this.searchText = val;
    },
  },
  };
</script>

<style lang="scss">
</style>