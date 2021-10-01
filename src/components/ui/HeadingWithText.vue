<template>
    <article class="heading-with-text"
        :class="classObject"
    >
        <h3 class="heading-with-text__heading">
            <slot name="heading"></slot>
        </h3>

        <p class="heading-with-text__text">
            <slot name="text"></slot>
        </p>
    </article>
</template>

<script>
export default {
    name: "HeadingWithText",
    props: {
        changeType: Boolean,
        firstChildMargin: Boolean
    },
    computed: {
        classObject() {
            let classNames = "";
            this.changeType ? classNames += "heading-with-text--light" : "";
            this.firstChildMargin ? classNames += " heading-with-text--margin-bottom" : "";

            return classNames;
        }
    }
}
</script>

<style lang="scss" scoped>
    .heading-with-text {
        $self: &;

        text-align: center;
        font-family: fonts.$Overpass;

        @media screen and (min-width: 1024px) {
            text-align: left;
        }

        &--margin-bottom {
            margin-bottom: 40px;

            @media screen and (min-width: 1024px) {
                margin-bottom: 75px;
            }
        }

        &__heading {
            margin-bottom: 15px;
            
            color: colors.$Very-dark-blue;
            font-size: 1.8em;
            line-height: 35px;

            @media screen and (min-width: 1024px) {
                margin-bottom: 25px;
            }

            #{ $self }--light & {
                color: colors.$White;
            }
        }

        &__text {
            line-height: 28px;
            color: colors.$Very-dark-grayish-blue;

            #{ $self }--light & {
                color: rgba(colors.$White, 0.8);
            }

            @media screen and (min-width: 768px) {
                letter-spacing: 0.5px;
            }
        }
    }
</style>
