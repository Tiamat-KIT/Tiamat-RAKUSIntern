<script setup>
    const message = "HelloWorld"
    const h2_message = "<h2>HelloWorld</h2>"
    let Upper_message = "HelloWorld"
    const upperCase = () => {
        Upper_message = Upper_message.toUpperCase()
    }
    upperCase()
    
    const Google_Link = "https://google.com"
</script>

<template>
    <p>マスタッシュ使用時とv-text使用時の変数展開の結果は一緒</p>
    <p>{{ message }}</p>
    <p v-text="message" />
    <p>v-textとv-htmlの変数展開時の表示の違い</p>
    <p v-text="h2_message" />
    <p v-html="h2_message" />
    <p>アロー関数の即時実行</p>
    <div v-text="Upper_message" />
    <p>v-bindでhref属性を設定する</p>
    <a v-bind:href="Google_Link">Google</a>
    <br />
    <a :href="Google_Link">Google</a>
</template>