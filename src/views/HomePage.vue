<template>
  <h1>HOLA MUNDO</h1>
  <button class="btn btn-primary" @click="goToDaybook">PRIMARY</button>
  <button class="btn btn-secondary">SECONDARY</button>
  <button class="btn btn-success">SUCCESS</button>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'no-entry' });
    },
  },
};
</script>
