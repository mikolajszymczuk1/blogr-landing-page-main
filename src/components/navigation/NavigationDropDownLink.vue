<template>
    <div class="dropdown-link">
        <div class="dropdown-link__activator">
            {{ dropdownName }}
            <img class="dropdown-link__arrow-icon"
                src="../../assets/svg/icon-arrow-dark.svg"
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
    padding: 15px 0;

    font-family: fonts.$Ubuntu;

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
    }

    &__arrow-icon {
        margin-left: 8px;
    }

    &__content {
        display: none;

        margin-top: 23px;

        height: 150px;

        overflow-y: auto;
        background-color: rgba(colors.$Grayish-blue, 0.3);
        border-radius: 5px;
        transition: height 200ms ease-out;
    }
}
</style>
