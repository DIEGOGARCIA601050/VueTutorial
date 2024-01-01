<script setup>
    defineProps({
        DivisaDeOrigen: {
            type: String,
            Request: true
        },
        DivisaACambiar:{
            type: String,
            Request: true
        }
    });

      
</script>

<template>
    <section class="divisa">
          <h1>Convertir de {{ DivisaDeOrigen }} a {{ DivisaACambiar }}</h1>
          <form action="f" id='formulario'>
            <label for="dollars">
              Introduzca la cantidad de {{ DivisaDeOrigen }} que desea cambiar: </label
            ><br />
            <input type="number" id="dollars" name="dollars" />
            <input type="submit" contenteditable="enviar" />
          </form>
        </section>
        <p>{{ resultado }}</p>
</template>

<style>
  section {
    background-color: rgb(90, 84, 187);
    color: black;
    display: inline-block;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
  .divisa {
    float: left;
    flex-basis: 100px;
    flex-grow: 1;
  }

  .divisa h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>