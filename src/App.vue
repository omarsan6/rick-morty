<script setup>
import Formulario from './components/Formulario.vue'
import Personaje from './components/Personaje.vue'
import Spiner from './components/Spiner.vue'
import Alerta from './components/Alerta.vue'

import usePersonaje from './composables/usePersonaje.js'

const { obtenerPersonaje, personajes, cargando, errorRespuesta } = usePersonaje()
</script>

<template>

    <div class="my-10 md:mt-10">

        <h1 class="text-3xl md:text-4xl font-bold text-white text-center">Rick y Morty - API</h1>

        <div class="text-white flex flex-col md:flex-row items-center justify-center">

            <Formulario @obtener-personaje="obtenerPersonaje" />

        </div>

        <div class="flex flex-wrap gap-5 md:gap-24 justify-center">

            <Spiner v-if="cargando" />

            <Alerta v-if="errorRespuesta">
                {{ errorRespuesta }}
            </Alerta>

            <Personaje v-for="personaje in personajes" :personaje="personaje"/>

        </div>


    </div>



</template>

<style scoped></style>
