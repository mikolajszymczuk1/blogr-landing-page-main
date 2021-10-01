<template>
    <section class="section-future">
        <h2 class="section-future__special-heading">Designed for the future</h2>

        <StructureTextImage>
            <HeadingWithText first-child-margin>
                <template v-slot:heading>
                    Introducing an extensible editor
                </template>

                <template v-slot:text>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.
                </template>
            </HeadingWithText>

            <HeadingWithText>
                <template v-slot:heading>
                    Robust content management
                </template>

                <template v-slot:text>
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </template>
            </HeadingWithText>
        </StructureTextImage>
    </section>    
</template>

<script>
import StructureTextImage from "@/components/ui/structure/StructureTextImage.vue";
import HeadingWithText from "@/components/ui/HeadingWithText.vue";

export default {
    name: "SectionFuture",
    components: {
        StructureTextImage,
        HeadingWithText
    }
}
</script>

<style lang="scss" scoped>
.section-future {
    position: relative;

    padding-top: 105px;

    @media screen and (min-width: 1024px) {
        padding: 0;
    }

    &__special-heading {
        text-align: center;
        font-family: fonts.$Overpass;
        color: colors.$Very-dark-blue;
        font-size: 1.7em;

        @media screen and (min-width: 768px) {
            font-size: 2.3em;
        }

        @media screen and (min-width: 1024px) {
            position: absolute;
            left: 50%;
            top: 140px;

            transform: translateX(-50%);
        }
    }
}
</style>
