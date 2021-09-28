<template>
    <a class="logo-link" href="#">
        <img class="logo-link__image" src="../../assets/svg/logo.svg" alt="Logo" title="Logo"
            :width="imageWidth"
        >
    </a>
</template>

<script>
export default {
    name: "LogoImage",
    props: {
        imageWidth: String
    }
}
</script>

<style lang="scss" scoped>
.logo-link {
    text-decoration: none;

    &__image {
        height: auto;
    }
}
</style>