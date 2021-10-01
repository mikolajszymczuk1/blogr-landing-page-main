<template>
    <main>
        <SectionFuture />
        <SectionState />
        <SectionBenefits />
    </main>
</template>

<script>
import SectionFuture from "@/components/sections/SectionFuture.vue";
import SectionState from "@/components/sections/SectionState.vue";
import SectionBenefits from "@/components/sections/SectionBenefits.vue";

export default {
    name: "HomeMain",
    components: {
        SectionFuture,
        SectionState,
        SectionBenefits
    }
}
</script>
