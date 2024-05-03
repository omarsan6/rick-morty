import { ref } from "vue"
import axios from "axios"


export default function usePersonaje(){

    const personajes = ref({})

    const cargando = ref(false)

    const errorRespuesta = ref('')

    const obtenerPersonaje = async (personaje) => {

        cargando.value = true
        personajes.value = {}
        errorRespuesta.value = ''

        try {
            const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`
            const {data} = await axios(url)
            
            
            personajes.value = data.results

        } catch(error){
            errorRespuesta.value = error.response.data.error
        } finally {
            cargando.value = false
        }
        
    }


    return {
        obtenerPersonaje,
        personajes,
        cargando,
        errorRespuesta
    }
}