export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      required: true
    }
  },
  methods: {
    input(newValue) {
      this.$emit('input', newValue);
    }
  }
};