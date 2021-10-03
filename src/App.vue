<template>
    <div>
        <HomeHeader />
        <HomeMain />
        <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from "@/components/layout/HomeHeader.vue";
import HomeMain from "@/components/layout/HomeMain.vue";
import HomeFooter from "@/components/layout/HomeFooter.vue";

export default {
    name: "App",
    components: {
        HomeHeader,
        HomeMain,
        HomeFooter
    },
};
</script>
