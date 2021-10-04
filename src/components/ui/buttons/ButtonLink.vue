<template>
    <a class="button-link" :href="buttonHref"
        :class="'button-link--' + buttonType"
    >
        {{ buttonText }}
    </a>
</template>

<script>
export default {
    name: "ButtonLink",
    props: {
        buttonType: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        buttonHref: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.button-link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 10px;

    width: 140px;

    border-radius: 50px;

    text-decoration: none;
    font-family: fonts.$Ubuntu;
    font-weight: 700;
    text-align: center;

    &--white {
        background-color: colors.$White;

        color: colors.$Primary-Light-red;

        &:hover {
            background-color: rgba(colors.$White, 0.2);

            color: colors.$White;
        }
    }

    &--sign-up {
        background-color: colors.$Primary-Light-red;
        background: linear-gradient(to right, colors.$Very-light-red, colors.$Light-red);

        color: colors.$White;

        @media screen and (min-width: 1024px) {
            background-color: colors.$White;
            background: none colors.$White;

            color: colors.$Primary-Light-red;

            &:hover {
                background-color: rgba(colors.$White, 0.2);

                color: colors.$White;
            }
        }
    }

    &--login {
        padding: 20px 10px 25px 10px;

        color: colors.$Very-dark-blue;
    
        @media screen and (min-width: 1024px) {
            padding: 15px 10px;
            
            width: 100px;

            color: rgba(colors.$White, 0.7);
        }
    }

    &--transparent {
        background-color: transparent;
        border: solid 1px colors.$White;

        color: colors.$White;

        &:hover {
            background-color: colors.$White;

            color: colors.$Primary-Light-red;
        }
    }
}
</style>
