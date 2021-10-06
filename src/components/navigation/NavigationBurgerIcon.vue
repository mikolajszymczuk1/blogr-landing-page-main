<template>
    <button class="hamburger-icon"
        @click="toggleActive"
    >
        <IconHamburger v-if="!isActive" class="hamburger-icon__icon" />
        <IconClose v-else class="hamburger-icon__icon" />
    </button>
</template>

<script>
import IconHamburger from "@/components/ui/icons/IconHamburger.vue";
import IconClose from "@/components/ui/icons/IconClose.vue";

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

    @media screen and (min-width: 1024px) {
        display: none;        
    }

    // &__icon {}
}
</style>