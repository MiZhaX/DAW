<script setup>
  import Landing from './components/Landing.vue';
  import Recordatorios from './components/Recordatorios.vue';
</script>
<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/recordatorios">Recordatorios</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>



<style scoped>

</style>