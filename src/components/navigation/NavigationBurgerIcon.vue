<template>
    <button class="hamburger-icon"
        @click="toggleActive"
    >
        <IconHamburger v-if="!isActive" class="hamburger-icon__icon" />
        <IconClose v-else class="hamburger-icon__icon" />
    </button>
</template>

<script>
import IconHamburger from "@/assets/svg/icon-hamburger.svg?inline";
import IconClose from "@/assets/svg/icon-close.svg?inline";

export default {
    name: "NavigationBurgerIcon",
    components: {
        IconHamburger,
        IconClose
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
            this.$emit("activeMenu");
        }
    }
}
</script>

<style lang="scss" scoped>
.hamburger-icon {
    border: 0;
    outline: none;
    background-color: transparent;

    // &__icon {}
}
</style>