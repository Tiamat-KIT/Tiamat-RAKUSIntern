<script setup>
    const isActive=true
</script>

<template>
    <p class="active">クラス指定によるCSS</p>
    <p :class="{active: isActive}">v-bindディレクティブを使ったクラス指定によるCSS</p>
    <p class="underline" :class="{active: isActive}">通常のクラス指定とディレクティブによるクラス指定の併用</p>
</template>

<style>
    .active{
        color: red;
        font-weight: 900;
    }
    .underline{
        text-decoration: underline
    }
</style>