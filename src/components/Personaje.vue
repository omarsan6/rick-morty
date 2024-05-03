<script setup>

defineProps({
    personaje: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="mt-16 bg-amber-400 rounded-xl m-auto">

        <img :src="personaje.image" class="" alt="">

        <div class="m-3">

            <!-- Nombre -->
            <p class="font-bold text-slate-700 text-3xl">
                {{ personaje.name }}
            </p>

            <!-- Estado -->
            <div class="flex items-center my-2 gap-2">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <p class="text-sm text-slate-600">
                    {{ personaje.status }}
                </p>
            </div>

            <!-- Primera aparición -->
            <div class="">
                <h3 class="text-sm mt-5 text-slate-500">
                    Primera aparición:
                </h3>

                <p class="text-xl text-slate-800 tracking-[1px]">{{ personaje.location.name }}</p>
                
            </div>

            <!-- Genero -->
            <div class="">
                <h3 class="text-sm mt-5 text-slate-500">
                    Género:
                </h3>

                <p class="text-xl text-slate-800 tracking-[1px]">{{ personaje.gender }}</p>
                
            </div>

        </div>



    </div>
</template>
