<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="w-full flex justify-between items-center p-5">
        <div></div>
        <h1 class="text-center font-bold text-3xl text-red-500">
            <RouterLink to="/">
                Pizzas
                Delivery
            </RouterLink>
        </h1>
        <button>
            <img class="w-7 mt-1" src="@/assets/icons/cart2.svg" />
        </button>
    </header>
</template>