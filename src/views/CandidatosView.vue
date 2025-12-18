<template>
    <div>
        <BuscarCandidato @agregar-candidato="agregarCandidato" />
        <ListaCandidatos :candidatos="lista" />
    </div>
</template>

<script>
import BuscarCandidato from '../components/BuscarCandidato.vue';
import ListaCandidatos from '../components/ListaCandidatos.vue';

export default {
    name: 'CandidatosView',

    components: {
        BuscarCandidato,
        ListaCandidatos
    },

    data() {
        return {
        lista: []
        };
    },

    methods: {
        agregarCandidato(candidato) {
        this.lista.push(candidato);
        }
    }
    };
</script>

<style scoped> 

</style>