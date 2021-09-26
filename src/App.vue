<template>
    <h1>Hello World !!!</h1>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss" scoped>
    @use "assets/scss/utilities/colors";
    @use "assets/scss/utilities/fonts";

    h1 {
        padding: 10px;

        background-color: colors.$Primary-Light-red;

        text-align: center;
        color: colors.$White;
        font-family: fonts.$Ubuntu;
    }
</style>
