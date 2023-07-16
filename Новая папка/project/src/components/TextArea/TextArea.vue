<template>
  <div class="textarea-wrapper">
    <textarea
      :value="value"
      @input="updateValue($event.target.value)"
      :placeholder="placeholder"
      v-autoresize
    ></textarea>
  </div>
</template>

<script>
export default {
  directives: {
    autoresize: {
      bind(el) {
        function resizeTextarea() {
          el.style.height = "auto";
          el.style.height = el.scrollHeight + "px";
        }

        el.addEventListener("input", resizeTextarea);
      },
    },
  },
  props: {
    placeholder: String,
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>

