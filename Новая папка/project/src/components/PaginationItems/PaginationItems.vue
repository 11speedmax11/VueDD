<template>
  <div class="pagination">
    <div class="pagination__pages">
      <CustomButton
        @click="goPreviousPage"
        icon="drop_down_4"
        buttonStyle="secondary"
        :isDisabled="currentPage == 1"
      ></CustomButton>
      <CustomButton
        @click="goPage(item)"
        v-for="(item, i) in displayedPages"
        :key="item + i"
        :class="{ active: item === currentPage }"
        :buttonStyle='item === currentPage? "primary": "secondary"'
      >
        {{ item }}
      </CustomButton>
      <CustomButton
        @click="goNextPage"
        icon="drop_down_2"
        buttonStyle="secondary"
        :isDisabled="currentPage == total"
      ></CustomButton>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";

export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageLength: {
      type: Number,
      default: 10,
    },
  },
  components: {
    CustomButton,
  },
  computed: {

    displayedPages() {
      const maxDisplayedPages = 7;
      const currentPage = this.currentPage;
      const lastPage = this.total;
      let displayedPages = [];

      if (lastPage <= maxDisplayedPages) {
        displayedPages = Array.from({ length: lastPage }, (_, i) => i + 1);
      } else {
        let pagesToShow;
        if (currentPage > 3 && currentPage < lastPage - 2) {
          pagesToShow = 1;
        } else {
          pagesToShow = Math.max(5 - currentPage, 4 + currentPage - lastPage);
        
        }
        const startPage = currentPage - pagesToShow;
        const endPage = currentPage + pagesToShow;


        displayedPages.push(1);

        if (startPage > 3) {
          displayedPages.push("...");
        } else {
          displayedPages.push(2);
        }

        for (
          let i = Math.max(3, startPage);
          i <= Math.min(lastPage - 1, endPage);
          i++
        ) {
          displayedPages.push(i);
        }

        if (endPage < lastPage - 2) {
          displayedPages.push("...");
        }
        if (currentPage == lastPage - 3) {
          displayedPages.push(lastPage - 1);
        }

        displayedPages.push(lastPage);
      }

      return displayedPages;
    },
  },
  methods: {
    goPreviousPage() {
      this.$emit("goPreviousPage");
    },
    goNextPage() {
      this.$emit("goNextPage");
    },
    goPage(page) {
      this.$emit("goPage", page);
    },
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>