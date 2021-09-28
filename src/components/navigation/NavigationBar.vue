<template>
    <nav class="navigation-bar">
        <LogoImage image-width="80" />
        <NavigationBurgerIcon @activeMenu="activeMenu" />

        <div class="navigation-bar__content"
            :class="isMenuActive ? 'navigation-bar__content--active' : ''"
        >
            <div class="navigation-bar__link-container">
                <NavigationDropDownLink v-for="dropdown in allDropdowns"
                    :key="dropdown.name"
                    :dropdownName="dropdown.name"
                >
                    <a class="navigation-bar__link"
                        v-for="link in dropdown.links"
                        :key="link.linkName"
                        :href="link.url"
                    >
                        {{ link.linkName }}
                    </a>
                </NavigationDropDownLink>
            </div>
            
            <div class="navigation-bar__login-links-group">
                <a class="navigation-bar__login-link navigation-bar__login-link--login" href="#Login">Login</a>
                <a class="navigation-bar__login-link navigation-bar__login-link--sign-up" href="#Sign-up">Sign Up</a>
            </div>
        </div>
    </nav>
</template>

<script>
import LogoImage from "@/components/ui/LogoImage.vue";
import NavigationBurgerIcon from "./NavigationBurgerIcon.vue";
import NavigationDropDownLink from "./NavigationDropDownLink.vue";

export default {
    name: "NavigationBar",
    components: {
        LogoImage,
        NavigationBurgerIcon,
        NavigationDropDownLink
    },
    data() {
        return {
            isMenuActive: false,
            allDropdowns: [
                {
                    name: "Product", links: [
                        { linkName: "Overview", url: "#Overview" },
                        { linkName: "Pricing", url: "#Pricing" },
                        { linkName: "Marketplace", url: "#Marketplace" },
                        { linkName: "Features", url: "#Features" },
                        { linkName: "Integrations", url: "#Integrations" }
                    ]
                },
                {
                    name: "Company", links: [
                        { linkName: "About", url: "#About" },
                        { linkName: "Team", url: "#Team" },
                        { linkName: "Blog", url: "#Blog" },
                        { linkName: "Careers", url: "#Careers" }
                    ]
                },
                {
                    name: "Connect", links: [
                        { linkName: "Contact", url: "#Contact" },
                        { linkName: "Newsletter", url: "#Newsletter" },
                        { linkName: "LinkedIn", url: "#LinkedIn" }
                    ]
                }
            ]
        }
    },
    methods: {
        activeMenu() {
            this.isMenuActive = !this.isMenuActive;
        }
    }
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/utilities/colors";
@use "../../assets/scss/utilities/fonts";

.navigation-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    padding: 50px 25px;

    &__content {
        display: none;
        position: absolute;
        top: 127px;
        left: 50%;

        padding: 20px;

        width: 87%;

        background-color: colors.$White;
        transform: translateX(-50%);
        box-shadow: 0 10px 16px rgba(colors.$Very-dark-gray-blue, 0.25);
        border-radius: 5px;

        text-align: center;

        &--active {
            display: block;
        }
    }

    &__link-container {
        padding-bottom: 10px;

        border-bottom: solid 1px rgba(colors.$Grayish-blue, 0.5);
    }

    &__link {
        display: block;

        padding: 12px;

        text-decoration: none;
        color: rgba(colors.$Very-dark-grayish-blue, 0.9);
        font-size: 0.95em;
        font-weight: 500;

        &:first-child {
            margin-top: 12px;
        }

        &:last-child {
            margin-bottom: 12px;
        }
    }

    &__login-links-group {
        display: flex;
        align-items: center;
        flex-direction: column;

        padding: 18px 0;

        font-family: fonts.$Ubuntu;
    }

    &__login-link {
        padding: 15px 40px;

        border-radius: 50px;

        text-decoration: none;
        font-weight: 500;
    
        &--login {
            margin-bottom: 10px;

            color: colors.$Very-dark-blue;
        }

        &--sign-up {
            background-color: colors.$Primary-Light-red;

            color: white;
        }
    }
}
</style>
