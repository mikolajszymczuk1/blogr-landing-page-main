<template>
    <footer class="footer">
        <LogoImage class="footer__logo" no-resize />

        <div class="footer__navigation-links">
            <div class="footer__category"
                v-for="category in allNavigationLinks"
                :key="category.name"
            >
                <h4 class="footer__category-name">{{ category.name }}</h4>

                <div class="footer__category-links">
                    <a class="footer__link"
                        v-for="link in category.links"
                        :key="link.linkName"
                        :href="link.url"
                    >
                        {{ link.linkName }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import LogoImage from "@/components/ui/LogoImage.vue";
import { mapState } from "vuex";

export default {
    name: "HomeFooter",
    components: {
        LogoImage
    },
    computed: {
        ...mapState(["allNavigationLinks"])
    }
}
</script>

<style lang="scss" scoped>
.footer {
    padding: 80px 0;

    background-color: colors.$Very-dark-black-blue;
    border-top-right-radius: 100px;

    text-align: center;
    font-family: fonts.$Ubuntu;

    @media screen and (min-width: 768px) {
        padding: 60px 0;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        padding: 70px 0;
    }

    @media screen and (min-width: 1440px) {
        padding: 83px 0;
    }

    &__navigation-links {
        margin-top: 80px;

        @media screen and (min-width: 768px) {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
        }

        @media screen and (min-width: 1024px) {
            margin-top: 0;

            width: 70%;
        }

        @media screen and (min-width: 1600px) {
            width: 45%;
        }
    }

    &__category {
        margin-bottom: 50px;

        text-align: center;
        font-size: 1.1em;

        @media screen and (min-width: 768px) {
            margin-bottom: 0;
            
            text-align: left;
        }

        @media screen and (min-width: 1440px) {
            font-size: 0.9em;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__category-name {
        margin-bottom: 35px;

        color: colors.$White;
        font-weight: 500;

        @media screen and (min-width: 1440px) {
            margin-bottom: 40px;
        }
    }

    // &__category-links {}

    &__link {
        display: block;

        margin-bottom: 15px;

        text-decoration: none;
        color: rgba(colors.$White, 0.7);

        @media screen and (min-width: 1024px) {
            &:hover {
                text-decoration: underline;
            }
        }

        @media screen and (min-width: 1440px) {
            margin-bottom: 17px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
