import { mount } from "@vue/test-utils";
import HeadingWithText from "@/components/ui/HeadingWithText.vue";

describe("HeadingWithText.vue", () => {
    test("All props should be false", () => {
        const wrapper = mount(HeadingWithText);
        expect(wrapper.props("changeType")).toBe(false);
        expect(wrapper.props("firstChildMargin")).toBe(false);
    });

    test("if changeType prop is true, should add class", () => {
        const wrapper = mount(HeadingWithText, {
            propsData: {
                changeType: true
            }
        });

        expect(wrapper.classes()).toContain("heading-with-text--light");
    });

    test("if firstChildMargin prop is true, should add class", () => {
        const wrapper = mount(HeadingWithText, {
            propsData: {
                firstChildMargin: true
            }
        });

        expect(wrapper.classes()).toContain("heading-with-text--margin-bottom");
    });

    test("slots content should be in h3 and p tags", () => {
        const wrapper = mount(HeadingWithText, {
            slots: {
                heading: "test heading content",
                text: "test text content"
            }
        });

        expect(wrapper.html())
            .toContain('<h3 class="heading-with-text__heading">test heading content</h3>');
        
        expect(wrapper.html())
            .toContain('<p class="heading-with-text__text">test text content</p>');
    });
});
