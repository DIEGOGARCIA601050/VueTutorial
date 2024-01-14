<script setup>
    defineProps({
        Nombre: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h2>Hola, mi nombre es {{ Nombre }}</h2>
</template>

<style>
    h2 {
        display: block;
    }
</style>