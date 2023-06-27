<template>
  <div class="input-wrapper control">
    <input
      class="input"
      :class="[{ 'erorr': isErorr }]"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  computed: {
    isErorr() {
      console.log(this.value)
      return this.value.length < 4;
    },
    disabled() {
      return this.value.length > 10;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
