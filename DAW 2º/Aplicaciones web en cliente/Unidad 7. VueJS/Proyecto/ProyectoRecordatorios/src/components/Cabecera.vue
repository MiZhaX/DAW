<script setup>
import { ref } from 'vue';

const emit = defineEmits(['añadirTarea']);

var nombre = ref("");

function añadirTarea(){
    console.log("Añadiendo tarea " + nombre.value);
    emit("añadirTarea", nombre.value);
    nombre.value = "";
}

</script>

<template>
    <h1>TO-DO LIST</h1>
    <input type="text" id="taskList-input" placeholder="e.g. Acabar Proyecto" v-model="nombre" @keyup.enter="añadirTarea">
</template>

<style scoped>
h1 {
    margin-bottom: 1rem;
}

#taskList-input {
    width: 75%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}

</style>