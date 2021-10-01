<template>
    <div>
        <HomeHeader />
        <HomeMain />
    </div>
</template>

<script>
import HomeHeader from "./components/layout/HomeHeader.vue";
import HomeMain from "./components/layout/HomeMain.vue";

export default {
    name: "App",
    components: {
        HomeHeader,
        HomeMain
    },
};
</script>
