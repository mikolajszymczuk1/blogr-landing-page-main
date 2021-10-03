<template>
    <a class="logo-link" href="#">
        <img class="logo-link__image" src="@/assets/svg/logo.svg" alt="Logo" title="Logo"
            :class="noResize ? 'logo-link__image--no-resize' : ''"
        >
    </a>
</template>

<script>
export default {
    name: "LogoImage",
    props: {
        noResize: Boolean
    }
}
</script>

<style lang="scss" scoped>
.logo-link {
    text-decoration: none;

    &__image {
        width: 80px;
        height: auto;

        @media screen and (min-width: 1024px) {
            width: 95px;
        }

        &--no-resize {
            width: 95px;
        }
    }
}
</style>