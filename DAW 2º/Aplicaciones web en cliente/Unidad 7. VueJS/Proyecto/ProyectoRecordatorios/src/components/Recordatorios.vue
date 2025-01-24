<script setup>
import Cabecera from './Cabecera.vue';
import ResumenTareas from './ResumenTareas.vue';
import Tarea from './Tarea.vue';
import Pie from './Pie.vue'; 
import Login from './Login.vue';
import { useCollection, useFirestore } from 'vuefire'
import { collection, addDoc, orderBy, query, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { ref, watch } from 'vue';

const db = useFirestore();
var listaTareas = useCollection(query(collection(db, 'tasks'), orderBy('prioridad', 'desc')));
var pendingTasks = ref(listaTareas.value.filter(task => !task.completado).length);
var usuarioActual = JSON.parse(localStorage.getItem('usuario')) || '';

function updateList(){
  pendingTasks.value = listaTareas.value.filter(task => !task.completado).length;
  listaTareas.value.sort((a, b) => b.prioridad - a.prioridad);
}

function establecerUsuario(usuario){
  localStorage.setItem('usuario', JSON.stringify(usuario));
  usuarioActual = JSON.parse(localStorage.getItem('usuario')) || '';
}

function cerrarSesion(){
  usuarioActual = '';
  localStorage.setItem('usuario', JSON.stringify(usuarioActual));
}

function nuevaTarea(tarea) {
  var nuevaTarea = {
    titulo: tarea,
    prioridad: 0,
    completado: false,
    usuario: usuarioActual
  }

  // listaTareas.value.push(nuevaTarea);

  addDoc(collection(db, 'tasks'), nuevaTarea
  ).then((docRef) =>{

  }).catch((error) => {
    console.log(error);
  });
}

function eliminarTarea(index) {
  const tareaRef = doc(db, 'tasks', listaTareas.value[index].id);
  deleteDoc(tareaRef)
    .then(() => {
      console.log(`Tarea ${listaTareas.value[index]} eliminada`);
      listaTareas.value.splice(index, 1);
    })
    .catch((error) => {
      console.error("Error al eliminar la tarea: ", error);
    });
}

watch(
  () => listaTareas.value,
  (newValue, oldValue) => {
    updateList();
  },
  { deep: true }
);

function prioridadNueva(index, prioridad) {
  const tareaRef = doc(db, 'tasks', listaTareas.value[index].id);
  setDoc(tareaRef, { prioridad: prioridad }, { merge: true })
    .then(() => {})
    .catch((error) => {
      console.error("Error actualizando la prioridad: ", error);
    });
}

function completarTarea(index) {
  const tareaRef = doc(db, 'tasks', listaTareas.value[index].id);
  setDoc(tareaRef, { completado: !listaTareas.value[index].completado }, { merge: true })
    .then(() => {})
    .catch((error) => {
      console.error("Error al completar la tarea: ", error);
    });
}

function borrarCompletadas() {
  const completadas = listaTareas.value.filter(task => task.completado);
  completadas.forEach(task => {
    const tareaRef = doc(db, 'tasks', task.id);
    deleteDoc(tareaRef)
      .then(() => {
        console.log(`Tarea ${task.id} eliminada`);
      })
      .catch((error) => {
        console.error("Error al eliminar la tarea: ", error);
      });
  });
}

</script>

<template>
  <div class="container">
    <Cabecera @añadirTarea="nuevaTarea"></Cabecera>
    <Login @establecerUsuario="establecerUsuario" @cerrarSesion="cerrarSesion"></Login>
    <ResumenTareas :tareasPendientes="pendingTasks" @borrarTareasCompletadas="borrarCompletadas"></ResumenTareas>
    <Tarea v-for="(tarea, index) in listaTareas" :key="index" :nombre="tarea.titulo" :complete="tarea.completado" :priority="tarea.prioridad" @borrarTarea="eliminarTarea(index)" @cambioPrioridad="prioridadNueva(index, $event)" @marcarCompletada="completarTarea(index)"></Tarea>
    <Pie></Pie>
  </div>
</template>

<style scoped>
.container {
  background: #2d2b2b;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 700px;
  text-align: center;
}
</style>