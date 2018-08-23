<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variable.scss';

h1 {
  color: $point;
}
.a {
  .b {
    color: #fff;
  }
}
</style>
