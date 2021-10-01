<template>
    <div class="structure-text-image"
        :class="secondStyle ? 'structure-text-image--second-style' : ''"
    >
        <div class="structure-text-image__image-wrapper"
            v-if="!secondStyle"
        >
            <img class="structure-text-image__image" src="@/assets/svg/illustration-editor-mobile.svg" alt="image" title="image">
            <img class="structure-text-image__image structure-text-image__image--desktop" src="@/assets/svg/illustration-editor-desktop.svg" alt="image" title="image">
        </div>

        <div class="structure-text-image__image-wrapper"
            v-else
        >
            <img class="structure-text-image__image" src="@/assets/svg/illustration-laptop-mobile.svg" alt="image" title="image">
            <img class="structure-text-image__image structure-text-image__image--desktop" src="@/assets/svg/illustration-laptop-desktop.svg" alt="image" title="image">
        </div>

        <div class="structure-text-image__texts-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "StructureTextImage",
    props: {
        secondStyle: Boolean
    }
}
</script>

<style lang="scss" scoped>
.structure-text-image {
    $self: &;

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
    }

    &--second-style {
        @media screen and (min-width: 1024px) {
            flex-direction: row;
        }

        #{ $self }__image--desktop {
            @media screen and (min-width: 1024px) {
                transform: translateX(-300px);
            }

            @media screen and (min-width: 1440px) {
                transform: translateX(-172px);
            }
        }
    }

    &__image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 50%;

        overflow: hidden;
    }

    &__image {
        padding: 50px 0;

        width: 390px;
        height: auto;

        @media screen and (min-width: 768px) {
            width: 450px;
        }

        @media screen and (min-width: 1024px) {
            display: none;

            padding: 70px 0;
        }

        &--desktop {
            display: none;

            @media screen and (min-width: 1024px) {
                display: block;

                width: 1000px !important;
                
                transform: translateX(300px);
            }

            @media screen and (min-width: 1440px) {
                transform: translateX(172px);
            }

            #{ $self }--second-style & {
                @media screen and (min-width: 1440px) {
                    transform: translateX(-172px);
                }
            }
        }

        #{ $self }--second-style & {
            width: 490px;

            @media screen and (min-width: 768px) {
                width: 550px;
            }
        }
    }

    &__texts-wrapper {
        flex-basis: 50%;

        margin: 0 auto;

        width: 80%;

        @media screen and (min-width: 768px) {
            width: 60%;
        }

        @media screen and (min-width: 1024px) {
            padding-left: 100px;
            
            width: 100%;
        }

        @media screen and (min-width: 1440px) {
            padding: 0 30px 0 165px;
        }

        @media screen and (min-width: 2000px) {
            padding: 0 30px 0 15%;
        }

        #{ $self }--second-style & {
            @media screen and (min-width: 1024px) {
                padding: 0 100px 0 0;
            }

            @media screen and (min-width: 1440px) {
                padding: 0 165px 0 30px;
            }

            @media screen and (min-width: 2000px) {
                padding: 0 15% 0 30px;
            }
        }
    }
}
</style>
