import { mount } from "@vue/test-utils";
import StructureTextImage from "@/components/ui/structure/StructureTextImage.vue";

describe("StructureTextImage.vue", () => {
    test("secondStyle prop should be false as default", () => {
        const wrapper = mount(StructureTextImage);
        expect(wrapper.props("secondStyle")).toBe(false);
    });

    test("if secondStyle prop is true, should add class", () => {
        const wrapper = mount(StructureTextImage, {
            propsData: {
                secondStyle: true
            }
        });

        expect(wrapper.classes()).toContain("structure-text-image--second-style");
    });

    test("if secondStyle is false, should show illustration-editor-mobile.svg", () => {
        const wrapper = mount(StructureTextImage);
        let mobileImage = wrapper.find(".structure-text-image__image");
        expect(mobileImage.attributes("src")).toBe("@/assets/svg/illustration-editor-mobile.svg");
    });

    test("if secondStyle is true, should show illustration-laptop-mobile.svg", () => {
        const wrapper = mount(StructureTextImage, {
            propsData: {
                secondStyle: true
            }
        });

        let mobileImage = wrapper.find(".structure-text-image__image");
        expect(mobileImage.attributes("src")).toBe("@/assets/svg/illustration-laptop-mobile.svg");
    });
});
