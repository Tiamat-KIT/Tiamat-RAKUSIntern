<script setup>
    const isActive=true
    const isBlack=true
</script>

<template>
    <p class="active">クラス指定によるCSS</p>
    <p :class="{active: isActive}">v-bindディレクティブを使ったクラス指定によるCSS</p>
    <p class="underline" :class="{active: isActive}">①通常のクラス指定とディレクティブによるクラス指定の併用</p>
    <p :class="{'underline active': isActive}">②ディレクティブ指定で2クラス制御</p>
    <p class="underline" :class="{active: isActive,back: isBlack}">①+②</p>
</template>

<style>
    .active{
        color: red;
        font-weight: 900;
    }
    .underline{
        text-decoration: underline;
    }
    .back {
        background-color: black;
    }
</style>