<template>
    <section>
        <Nombre Nombre="Benito Juarez" />
        <MiComponente :miArray="arrayDeActos" />
    </section>
</template>

<script>
import MiComponente from './ActosImportantes.vue'
import Nombre from './components/Nombre.vue';

export default {
    components: {
        MiComponente,
        Nombre
    },
    data() {
        return {
            arrayDeActos: ['Participó en la Guerra de Reforma', 'Participó en la Intervención Francesa', 'Creo el registro civil', 'Participó en la creación de una nueva contitución']
        }
    }
}
</script>

<style>
section {
    display: inline-block;
    border: .1rem solid;
}
</style>