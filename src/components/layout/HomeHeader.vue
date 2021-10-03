<template>
    <header class="home-header">
        <NavigationBar />

        <section class="home-header__content">
            <div class="home-header__headings-wrapper">
                <h1 class="home-header__heading">A modern publishing platform</h1>
                <h2 class="home-header__under-heading">Grow your audience and build your online brand</h2>
            </div>

            <div class="home-header__buttons-wrapper">
                <ButtonLink class="home-header__button"
                    button-type="white"
                    button-text="Start for Free"
                    button-href="#Start-for-Free"
                />

                <ButtonLink class="home-header__button"
                    button-type="transparent"
                    button-text="Learn More"
                    button-href="#Learn-More"
                />
            </div>
        </section>
    </header>
</template>

<script>
import NavigationBar from "@/components/navigation/NavigationBar.vue";
import ButtonLink from "@/components/ui/buttons/ButtonLink.vue";

export default {
    name: "HomeHeader",
    components: {
        NavigationBar,
        ButtonLink
    },
};
</script>

<style lang="scss" scoped>
.home-header {
    position: relative;

    background-color: colors.$Light-red;
    background: linear-gradient(300deg, rgba(colors.$Light-red, 1) 0%, rgba(colors.$Very-light-red, 1) 100%);
    border-bottom-left-radius: 100px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-image: url("~@/assets/svg/bg-pattern-intro.svg");
        background-repeat: no-repeat;
        background-position: 35% 35%;
        background-size: 350%;
        border-bottom-left-radius: 100px;

        @media screen and (min-width: 768px) {
            background-position: 20% center;
        }

        @media screen and (min-width: 1024px) {
            background-position: 35% center;
            background-size: 300%;
        }

        @media screen and (min-width: 1440px) {
            background-position: 25% 51%;
            background-size: 220%;
        }
    }

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        padding: 65px 0 155px 0;

        @media screen and (min-width: 1440px) {
            padding: 85px 0 145px 0;
        }
    }

    &__headings-wrapper {
        margin-bottom: 40px;

        width: 80%;

        text-align: center;
        font-family: fonts.$Overpass;

        @media screen and (min-width: 1440px) {
            margin-bottom: 50px;
        }
    }

    &__heading {
        margin-bottom: 20px;

        font-size: 2.1em;
        line-height: 45px;
        color: colors.$White;

        @media screen and (min-width: 1024px) {
            font-size: 2.5em;
        }

        @media screen and (min-width: 1440px) {
            margin-bottom: 35px;
            
            font-size: 4em;
        }
    }

    &__under-heading {
        font-weight: 400;
        font-size: 1.1em;
        color: rgba(colors.$White, 0.8);

        @media screen and (min-width: 1024px) {
            font-size: 1.2em;
        }
    }

    &__buttons-wrapper {
        display: flex;
    }

    &__button {
        margin: 0 8px;
    }
}
</style>
