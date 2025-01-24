<script setup>
import { GoogleAuthProvider } from 'firebase/auth'
import { 
    signInWithPopup, 
    signOut,
} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const emit = defineEmits(['establecerUsuario', 'cerrarSesion']);
const googleAuthProvider = new GoogleAuthProvider()
const user = useCurrentUser()
const auth = useFirebaseAuth()

function iniciarSesion(){
    signInWithPopup(auth, googleAuthProvider).then(
        (result) => {
            console.log(result.user)
            emit("establecerUsuario", result.user.email)
        }
    ).catch((reason) => {
        console.error('Failed sign', reason)
    })
}

function cerrarSesion(){
    signOut(auth).then(
        () => {
            console.log("Se ha cerrado la sesión");
            emit("cerrarSesion");
        }
    ).catch(
        (e) => console.log(e)
    );
}

</script>
<template>
    <p v-if="user">Bienvenido {{ user.displayName }}</p>
    <button v-if="user" @click='cerrarSesion'>Cerrar Sesión</button>
    <button v-else @click="iniciarSesion">Iniciar Sesión</button>
</template>

<style scoped></style>

