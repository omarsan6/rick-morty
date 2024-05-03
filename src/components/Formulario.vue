<script setup>

    import {ref} from 'vue'
    import Alerta from './Alerta.vue'

    const personaje = ref('')
    const error = ref('')

    const emits = defineEmits(['obtener-personaje'])

    const consultarPersonaje = () => {
        if(personaje.value === ''){
            error.value = 'El campo Nombre es obligatorio'
            return;
        }

        error.value = ''

        emits('obtener-personaje',personaje.value)
    }

</script>

<template>
    <form class="max-w-sm w-full mt-10 md:mt-20" @submit.prevent="consultarPersonaje">

        <Alerta v-if="error">{{ error }}</Alerta>

        <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-white uppercase">Nombre del personaje</label>
            <input type="text" id="name" v-model="personaje"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-300 block w-full p-2.5"
                placeholder="Rick" />
        </div>
        
        
        <button type="submit"
            class="text-white font-medium bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none
             focus:ring-amber-100 rounded-lg text-sm w-full  px-5 py-2.5 text-center">Buscar</button>
    </form>
</template>
