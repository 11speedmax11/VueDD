<template>
  <div class="dropdown" :class="[{ 'disabled': disabled }]">
    <CustomButton
      :xClass="xClass"
      :icon="icon"
      :classButton="classButton"
      @click="toggle"
    >
      <span v-if="label"> {{ label }}</span>
      <img
        :class="imgClass"
        src="@/assets/images/profilPicture.png"
        width="24px"
        height="24px"
        v-if="imgClass"
      />
    </CustomButton>

    <div class="dropdown__menu" v-if="isActive">
      <div class="drop-down-menu__buttons">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    label: String,
    icon: String,
    imgClass: String,
    classButton: String,
    xClass: String,
  },
  computed: {
    disabled() {
      return this.imgClass == undefined;
    },
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
