<script setup>
    defineProps({
        url: {
            required: true,
            type: String
        }
    })
</script>
<template>
    <img :src="url" alt="Un personaje importante">
</template>
<style>
    
    img {
    width: 50%;
    height: 50%;
    }
</style>