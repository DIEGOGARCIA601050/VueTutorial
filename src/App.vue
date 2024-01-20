<template>
  <div>{{ message }}</div>
  <history :-array-de-actos="ActosBJ" url='https://img.europapress.es/fotoweb/fotonoticia_20160322181454_1920.jpg' Nombre="Benito Juarez"/>
</template>

<script>
import history from "./history.vue";
export default {
  name: "App",
  components: {
    HelloName,
    history
  },
  data() {
    return {
      message: "",
      ActosBJ:['Participó en la Guerra de Reforma', 'Participó en la Intervención Francesa', 'Creo el registro civil', 'Participó en la creación de una nueva contitución']
    };
  },
  async mounted() {
    const { text } = await (await fetch("/api/message")).json();
    this.message = text;
  }
};
</script>