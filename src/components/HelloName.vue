<script setup>
    defineProps({
        nombresito: {
            type: String,
            required: true
        }}
    )
    const styleColor = "color: hsla(160, 100%, 37%, 1);"
</script>

<template>
    <h1 :style="styleColor" class="nombresito">Eventos Historicos: {{nombresito.toUpperCase()}}¡</h1>
</template>

<style>
    .nombresito
        {
            font-weight: 500;
            font-size: 2.6rem;
            text-align: center;
        }
</style>