<template>
    <div>
        <h2>Buscar Candidato</h2>

        <form @submit.prevent="buscar">
        <img v-if="form.foto" :src="form.foto" width="120" />

        <input v-model="form.titulo" placeholder="Título" />
        <input v-model="form.nombre" placeholder="Nombre" />
        <input v-model="form.apellido" placeholder="Apellido" />
        <input v-model="form.atributo5" placeholder="Atributo 5 (Email)" />
        <input v-model="form.atributo6" placeholder="Atributo 6 (País)" />

        <button type="submit">Buscar</button>
        <button type="button" @click="agregar">Agregar</button>
        </form>
    </div>
</template>

<script>
import { obtenerCandidato } from '../clients/randomUserApi';

export default {
    name: 'BuscarCandidato',

    emits: ['agregar-candidato'],

    data() {
        return {
        form: {
            foto: '',
            titulo: '',
            nombre: '',
            apellido: '',
            atributo5: '',
            atributo6: ''
        }
        };
    },

    methods: {
        async buscar() {
        const data = await obtenerCandidato();

        this.form.foto = data.picture.large;
        this.form.titulo = data.name.title;
        this.form.nombre = data.name.first;
        this.form.apellido = data.name.last;

        // atributos elegidos libremente
        this.form.atributo5 = data.email;
        this.form.atributo6 = data.location.country;
        },

        agregar() {
        this.$emit('agregar-candidato', {
            titulo: this.form.titulo,
            nombre: this.form.nombre,
            apellido: this.form.apellido,
            atributo5: this.form.atributo5,
            atributo6: this.form.atributo6
        });
        }
    }
    };
</script>

<style scoped>
    form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    }
</style>