<template>
    <header>
        <NavigationBar />
    </header>
</template>

<script>
import NavigationBar from "../navigation/NavigationBar.vue";

export default {
    name: "HomeHeader",
    components: {
        NavigationBar,
    },
};
</script>

<style lang="scss" scoped>
header {
    background-color: colors.$Light-red;
}
</style>
