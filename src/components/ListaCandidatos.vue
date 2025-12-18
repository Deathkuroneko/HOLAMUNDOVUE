<template>
    <div>
        <h2>Lista de Candidatos</h2>

        <table border="1">
        <tr>
            <th>Título</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Atributo 5</th>
            <th>Atributo 6</th>
        </tr>

        <tr v-for="(c, index) in candidatos" :key="index">
            <td>{{ c.titulo }}</td>
            <td>{{ c.nombre }}</td>
            <td>{{ c.apellido }}</td>
            <td>{{ c.atributo5 }}</td>
            <td>{{ c.atributo6 }}</td>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListaCandidatos',

    props: {
        candidatos: {
        type: Array,
        required: true
        }
    }
    };
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
</style>