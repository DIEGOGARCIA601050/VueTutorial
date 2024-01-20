<template>
  <div>{{ message }}</div>
  <HelloName nombresito='f'/>
  <history :-array-de-actos="Actos" url='https://img.europapress.es/fotoweb/fotonoticia_20160322181454_1920.jpg' Nombre="Benito Juarez"/>
</template>

<script>
import history from "./history.vue";
import HelloName from "./components/HelloName.vue";
export default {
  name: "App",
  components: {
    HelloName,
    history
  },
  data() {
    return {
      message: "",
      Actos:['Participó en la Guerra de Reforma', 'Participó en la Intervención Francesa', 'Creo el registro civil', 'Participó en la creación de una nueva contitución']
    };
  },
  async mounted() {
    const { text } = await (await fetch("/api/message")).json();
    this.message = text;
  }
};
</script>