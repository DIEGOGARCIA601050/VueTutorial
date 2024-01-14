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
<div>
    <h1 :style="styleColor" class="nombresito">!HOLA {{nombresito.toUpperCase()}}¡</h1>
</div>
</template>

<style>
    .nombresito
        {
            font-weight: 500;
            font-size: 2.6rem;
        }
</style>