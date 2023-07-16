<template>
  <div class="modal">
    <div class="modal__body">
      <div class="modal__title">{{ currentModal.titleModal }}</div>
      <div class="modal__wrapper">
        <component
          :is="currentModal.componentName"
          :currentModal="currentModal"        
          @acceptAction="acceptAction"
          @cancle="cancle"
        >
          ok</component
        >
      </div>
    </div>
  </div>
</template>

<script>
import CreateProjectModal from "@/components/CreateProjectModal/CreateProjectModal.vue";
import DeleteTaskModal from "@/components/DeleteTaskModal/DeleteTaskModal.vue";
import EditPassModal from "@/components/EditPassModal/EditPassModal.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  props: {},
  components: {
    CreateProjectModal,
    DeleteTaskModal,
    EditPassModal
  },
  computed: {
    ...mapGetters("app", ["currentModal"]),
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions("app", ["closeCurrentModal"]),
    acceptAction(data) {

      this.currentModal.action(data);
      this.closeCurrentModal();
    },
    cancle() {
      this.closeCurrentModal();
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
