<template>
    <section>
        <foto :url="url"/>
        <Nombre :Nombre="Nombre" />
        <MiComponente :miArray="ArrayDeActos" />
    </section>
</template>

<script>
import foto from "./components/foto.vue";
import MiComponente from './ActosImportantes.vue'
import Nombre from './components/Nombre.vue';

export default {
    components: {
        MiComponente,
        Nombre,
        foto
    },
    data() {
        return {
            arrayDeActos: this.ArrayDeActos,
            url: this.url,
            Nombre: this.Nombre
        }
    },
    props: {
        ArrayDeActos: {
        type: Array,
        required: true
        },
        url:{
            type: String,
            required: true
        },
        Nombre: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
section {
    border: .1rem solid;
    text-align: center;
    display: inline-block;
    height: 744px;
    overflow-y: auto;
    flex: 1 0 20%; /* crecer, encoger, tamaño base */
  margin: 10px;
  text-align: center;
  border: 1px solid #000;
  padding: 20px;
  box-sizing: border-box;
}

</style>