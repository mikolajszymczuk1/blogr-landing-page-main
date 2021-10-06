import { mount } from "@vue/test-utils";
import ButtonLink from "@/components/ui/buttons/ButtonLink.vue";

describe("ButtonLink.vue", () => {
    test("When all props are set, component should have correct attributes values", () => {
        const wrapper = mount(ButtonLink, {
            propsData: {
                buttonType: "white",
                buttonText: "hello",
                buttonHref: "www.hello.com"
            }
        });

        expect(wrapper.classes()).toContain("button-link--white");
        expect(wrapper.attributes("href")).toBe("www.hello.com");
        expect(wrapper.text()).toBe("hello");
    });
});
