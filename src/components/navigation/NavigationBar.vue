<template>
    <nav class="navigation-bar">
        <LogoImage />
        <NavigationBurgerIcon @activeMenu="activeMenu" />

        <div class="navigation-bar__content"
            :class="isMenuActive ? 'navigation-bar__content--active' : ''"
        >
            <div class="navigation-bar__link-container">
                <NavigationDropDownLink v-for="category in allNavigationLinks"
                    :key="category.name"
                    :dropdownName="category.name"
                >
                    <a class="navigation-bar__link"
                        v-for="link in category.links"
                        :key="link.linkName"
                        :href="link.url"
                    >
                        {{ link.linkName }}
                    </a>
                </NavigationDropDownLink>
            </div>
            
            <div class="navigation-bar__login-links-group">
                <ButtonLink button-type="login" button-text="Login" button-href="#Login" />
                <ButtonLink button-type="sign-up" button-text="Sign Up" button-href="#Sign-Up" />
            </div>
        </div>
    </nav>
</template>

<script>
import LogoImage from "@/components/ui/LogoImage.vue";
import NavigationBurgerIcon from "@/components/navigation/NavigationBurgerIcon.vue";
import NavigationDropDownLink from "@/components/navigation/NavigationDropDownLink.vue";
import ButtonLink from "@/components/ui/buttons/ButtonLink.vue";
import { mapState } from "vuex";

export default {
    name: "NavigationBar",
    components: {
        LogoImage,
        NavigationBurgerIcon,
        NavigationDropDownLink,
        ButtonLink
    },
    data() {
        return {
            isMenuActive: false
        }
    },
    computed: {
        ...mapState(["allNavigationLinks"])
    },
    methods: {
        activeMenu() {
            this.isMenuActive = !this.isMenuActive;
        }
    }
};
</script>

<style lang="scss" scoped>
.navigation-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    padding: 50px 25px;

    z-index: 2;

    @media screen and (min-width: 1024px) {
        padding: 50px 100px;
    }

    @media screen and (min-width: 1440px) {
        padding: 60px 165px;
    }

    &__content {
        display: none;
        position: absolute;
        top: 127px;
        left: 50%;

        padding: 20px 20px 15px 20px;

        width: 87%;

        background-color: colors.$White;
        transform: translateX(-50%);
        box-shadow: 0 10px 16px rgba(colors.$Very-dark-gray-blue, 0.25);
        border-radius: 5px;

        text-align: center;

        @media screen and (min-width: 1024px) {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            position: static;

            padding: 0;
            margin-left: 60px;

            width: 100%;

            transform: translateX(0);
            box-shadow: none;
            background-color: transparent;
        }

        @media screen and (min-width: 1440px) {
            margin-left: 70px;
        }

        &--active {
            display: block;
        }
    }

    &__link-container {
        padding-bottom: 10px;

        border-bottom: solid 1px rgba(colors.$Grayish-blue, 0.5);

        @media screen and (min-width: 1024px) {
            display: flex;

            padding: 0;

            border-bottom: 0;
        }
    }

    &__link {
        display: block;

        padding: 12px;

        text-decoration: none;
        color: rgba(colors.$Very-dark-grayish-blue, 0.9);
        font-size: 0.95em;
        font-weight: 500;

        @media screen and (min-width: 1024px) {
            padding: 8px;
        }
        
        @media screen and (max-width: 1024px) {
            &:first-child {
                margin-top: 12px;
            }

            &:last-child {
                margin-bottom: 12px;
            }
        }

        &:hover {
            color: colors.$Very-dark-black-blue;
            font-weight: 700;
        }
    }

    &__login-links-group {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 18px 0;

        font-family: fonts.$Ubuntu;

        @media screen and (min-width: 1024px) {
            flex-direction: row;

            padding: 0;
        }
    }
}
</style>
