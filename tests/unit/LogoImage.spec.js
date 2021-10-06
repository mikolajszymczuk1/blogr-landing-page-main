import { mount } from "@vue/test-utils";
import LogoImage from "@/components/ui/LogoImage.vue";

describe("LogoImage.vue", () => {
    test("noResize prop is false by default", () => {
        const wrapper = mount(LogoImage);
        expect(wrapper.props("noResize")).toBeFalsy();
    });

    test("If noResize prop is true, should add class", () => {
        const wrapper = mount(LogoImage, {
            propsData: {
                noResize: true
            }
        });
        
        let logo = wrapper.find("img");
        expect(logo.classes()).toContain("logo-link__image--no-resize");
    });
});
