<template>
    <section class="section-state" aria-label="section-state">
        <div class="section-state__image-wrapper">
            <img class="section-state__image" src="@/assets/svg/illustration-phones.svg" alt="image" title="image">
        </div>

        <div class="section-state__text-wrapper">
            <HeadingWithText change-type>
                <template v-slot:heading>
                    State of the Art Infrastructure
                </template>

                <template v-slot:text>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </template>
            </HeadingWithText>
        </div>
    </section>
</template>

<script>
import HeadingWithText from "@/components/ui/HeadingWithText.vue"

export default {
    name: "SectionState",
    components: {
        HeadingWithText
    }
}
</script>

<style lang="scss" scoped>
.section-state {
    position: relative;

    padding: 210px 0 118px 0;
    margin-top: 280px;

    background-color: colors.$Very-dark-gray-blue;
    border-radius: 0 100px 0 100px;
    background: linear-gradient(0deg, rgba(colors.$Very-dark-desaturated-blue, 1) 0%, rgba(colors.$Very-dark-gray-blue, 1) 100%);

    @media screen and (min-width: 768px) {
        margin-top: 350px;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 100px;
        padding: 70px 0;

        background: linear-gradient(270deg, rgba(colors.$Very-dark-desaturated-blue, 1) 0%, rgba(colors.$Very-dark-gray-blue, 1) 100%);
    }

    @media screen and (min-width: 1440px) {
        padding: 106px 0;
        margin-top: 0;
    }

    @media screen and (min-width: 1800px) {
        padding: 130px 0;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-image: url("~@/assets/svg/bg-pattern-circles.svg");
        background-repeat: no-repeat;
        background-size: 160%;
        background-position: center -235px;
        border-radius: 0 100px 0 100px;

        @media screen and (min-width: 768px) {
            background-size: 120%;
            background-position: center 100%;
        }

        @media screen and (min-width: 1440px) {
            background-size: 70%;
            background-position: -50% 88%;
        }
    }

    &__image-wrapper {
        position: relative;

        margin-bottom: 15px;

        @media screen and (min-width: 1024px) {
            flex-basis: 50%;
        }
    }

    &__image {
        position: absolute;
        bottom: 0;
        left: 50%;

        width: 100%;
        height: auto;

        transform: translateX(-50%);

        @media screen and (min-width: 425px) {
            width: 390px;
        }

        @media screen and (min-width: 768px) {
            width: 450px;
        }

        @media screen and (min-width: 1024px) {
            bottom: 0;

            width: 550px;

            transform: translate(-50%, 50%);
        }

        @media screen and (min-width: 1440px) {
            bottom: -315px;

            transform: translateX(-50%);
        }
    }

    &__text-wrapper {
        position: relative;

        margin: 0 auto;

        width: 80%;

        @media screen and (min-width: 768px) {
            width: 70%;
        }

        @media screen and (min-width: 1024px) {
            flex-basis: 50%;

            padding: 0 50px 0 0;
        }

        @media screen and (min-width: 1440px) {
            padding: 0 180px 0 0;
        }

        @media screen and (min-width: 1800px) {
            padding: 0 20% 0 0;
        }
    }
}
</style>
