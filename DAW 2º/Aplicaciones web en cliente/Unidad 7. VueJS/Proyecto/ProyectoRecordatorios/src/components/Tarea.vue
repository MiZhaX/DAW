<script setup>
const props = defineProps(['nombre', 'complete', 'priority']);
const emit = defineEmits(['borrarTarea', 'cambioPrioridad', 'marcarCompletada']);

function lowPriority() {
    emit("cambioPrioridad", 0);
};

function mediumPriority() {
    emit("cambioPrioridad", 1);
};

function highPriority() {
    emit("cambioPrioridad", 2);
};

function markTask(){
    emit("marcarCompletada");
};

function borrarTarea(){
    emit("borrarTarea");
};

</script>

<template>
    <div class="task-card">
        <li class="task-li">
            <span :class="!props.complete ? 'task-name' : 'completed-task'">{{ props.nombre }}</span>
            <span id="prority-buttons">
                <button v-if="!props.complete" class="edit-btn" @click="markTask">✔️</button>
                <button v-else class="edit-btn" @click="markTask">❌</button>
                <button class="delete-btn" @click="borrarTarea">🗑️</button>
            </span>
        </li>
        <span id="task-buttons"> Prioridad:
            <button :class="props.priority == 0 ? 'active-low-priority' : 'low-priority'"
                @click="lowPriority()">Low</button>
            <button :class="props.priority == 1 ? 'active-medium-priority' : 'medium-priority'"
                @click="mediumPriority()">Medium</button>
            <button :class="props.priority == 2 ? 'active-high-priority' : 'high-priority'"
                @click="highPriority()">High</button>
        </span>
    </div>
</template>

<style scoped>
.task-card{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    background-color: #3d3b3b;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1rem;
}

.task-li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-name, .completed-task{
    text-align: left;
    font-size: x-large;
    margin-bottom: 5px;
    width: 370px;
    word-wrap: break-word; 
}

.completed-task{
    text-decoration: line-through;
    color: lightgreen;
}

#task-buttons{
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.high-priority, .low-priority, .medium-priority{
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 10%;
    border: none;
    color: lightgrey;
    background-color: grey;
    cursor: pointer;
}

.high-priority:hover, .low-priority:hover, .medium-priority:hover{
    background-color: lightgrey;
    color: grey;
}

.active-high-priority, .active-low-priority, .active-medium-priority{
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 10%;
    border: none;
    cursor: auto;
}

.active-low-priority{
    background-color:#3498db;
    color: white;
}

.active-medium-priority{
    background-color:#efb514;
    color: white;
}

.active-high-priority{
    background-color:#e74c3c;
    color: white;
}

.delete-btn, .edit-btn {
    background: none;
    border: none;
    border-radius: 90%;
    padding: 0.2rem;
    cursor: pointer;
}

.delete-btn:hover, .edit-btn:hover{
    background-color: white;
}
</style>