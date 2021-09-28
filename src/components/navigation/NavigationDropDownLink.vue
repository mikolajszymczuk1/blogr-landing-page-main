<template>
    <div class="dropdown-link">
        <div class="dropdown-link__activator">
            {{ dropdownName }}
            <img class="dropdown-link__arrow-icon"
                src="../../assets/svg/icon-arrow-dark.svg"
                alt="Arrow icon"
                title="Arrow icon"
            />
            <img class="dropdown-link__arrow-icon"
                src="../../assets/svg/icon-arrow-light.svg"
                alt="Arrow icon"
                title="Arrow icon"
            />
        </div>

        <div class="dropdown-link__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationDropDownLink",
    props: {
        dropdownName: {
            required: true,
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/utilities/colors";
@use "../../assets/scss/utilities/fonts";

.dropdown-link {
    $self: &;
    position: relative;

    padding: 15px 0;

    font-family: fonts.$Ubuntu;

    @media screen and (min-width: 1024px) {
        padding: 0;
        margin-right: 30px;
    }

    &:hover {
        #{ $self }__content {
            display: block;
        }

        #{ $self }__arrow-icon {
            transform: rotate(180deg);
        }
    }

    &__activator {
        display: flex;
        justify-content: center;
        align-items: center;

        color: colors.$Very-dark-blue;
        font-weight: 500;
        font-size: 1.1em;

        @media screen and (min-width: 1024px) {
            color: rgba(colors.$White, 0.7);
            font-size: 1em;
            font-weight: 700;
        }
    }

    &__arrow-icon {
        margin-left: 8px;

        @media screen and (min-width: 1024px) {
            display: none;
        }

        &:last-child {
            display: none;
        
            @media screen and (min-width: 1024px) {
                display: block;
            }
        }
    }

    &__content {
        display: none;

        margin-top: 23px;

        height: 150px;

        overflow-y: auto;
        background-color: rgba(colors.$Grayish-blue, 0.3);
        border-radius: 5px;
        transition: height 200ms ease-out;

        @media screen and (min-width: 1024px) {
            position: absolute;
            left: -25px;

            padding: 25px 60px 25px 15px;

            height: auto;

            overflow-y: visible;
            background-color: colors.$White;
            box-shadow: 0 10px 16px rgba(colors.$Very-dark-gray-blue, 0.1);

            text-align: left;
        }

        &::before {
            @media screen and (min-width: 1024px) {
                content: "";
                position: absolute;
                top: -23px;
                left: 0;
    
                width: 100%;
                height: 23px;
            }
        }
    }
}
</style>
