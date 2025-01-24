<script setup>
    const props = defineProps(['tareasPendientes']);
    const emit = defineEmits(['borrarTareasCompletadas']);
</script>

<template>
    <div class="pending-container">
        <p id="pending">Tienes {{ tareasPendientes }} tarea(s) pendientes <button id="pending-btn" class="pending-btn" @click="emit('borrarTareasCompletadas')">Borrar tareas completadas</button></p>
    </div>
</template>

<style scoped>
#pending{
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
}

.pending-btn {
    background-color: #efb514;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-left: 10px;
}

.pending-btn:hover{
    background-color: #bd9012;
}
</style>