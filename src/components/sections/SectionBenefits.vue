<template>
    <section class="section-benefits" aria-label="section-benefits">
        <StructureTextImage second-style>
            <HeadingWithText first-child-margin>
                <template v-slot:heading>
                    Free, open, simple
                </template>

                <template v-slot:text>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </template>
            </HeadingWithText>

            <HeadingWithText>
                <template v-slot:heading>
                    Powerful tooling
                </template>

                <template v-slot:text>
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                </template>
            </HeadingWithText>
        </StructureTextImage>
    </section>
</template>

<script>
import StructureTextImage from "@/components/ui/structure/StructureTextImage.vue";
import HeadingWithText from "@/components/ui/HeadingWithText.vue";

export default {
    name: "SectionBenefits",
    components: {
        StructureTextImage,
        HeadingWithText
    }
}
</script>

<style lang="scss" scoped>
    .section-benefits {
        padding-top: 15px;
        margin-bottom: 90px;

        @media screen and (min-width: 1440px) {
            padding-top: 50px;
            margin-bottom: 60px;
        }
    }
</style>
