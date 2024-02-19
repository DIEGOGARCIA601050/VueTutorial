<script setup>
    import HelloName from './HelloName.vue';
    import History from '@/History.vue';
    const PorfirioDiaz = ["Participó en la guerra de reforma", "Fue presidente de méxico por más de 20 años", "Generó un periodo de paz obligada", "Trajo las que, en esos tiempos eran las nuevas tecnologias"]
    const FranciscoMadero = ["Firmó el Plan de San Luis", "Creó el partido nacional antirreeleccionista"]
</script>

<template>
    <HelloName nombresito="La Revolución"/>
    <history -nombre="Porfirio Díaz" :-array-de-actos="PorfirioDiaz" url="https://acortar.link/zteUwa"/>
    <history -nombre="Francisco I. Madero" :-array-de-actos="FranciscoMadero" url="https://acortar.link/FWp3cO"/>
</template>