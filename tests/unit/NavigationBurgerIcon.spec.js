import { mount } from "@vue/test-utils";
import NavigationBurgerIcon from "@/components/navigation/NavigationBurgerIcon.vue";
import IconHamburger from "@/components/ui/icons/IconHamburger.vue";
import IconClose from "@/components/ui/icons/IconClose.vue";

describe("NavigationBurgerIcon.vue", () => {
    test("if isActive is false, button should contain only hamburger icon", () => {
        const wrapper = mount(NavigationBurgerIcon);
        expect(wrapper.findComponent(IconHamburger).exists()).toBe(true);
        expect(wrapper.findComponent(IconClose).exists()).toBe(false);
    });

    test("when click the button, button should contain only close icon", async () => {
        const wrapper = mount(NavigationBurgerIcon);
        await wrapper.trigger("click");
        expect(wrapper.findComponent(IconHamburger).exists()).toBe(false);
        expect(wrapper.findComponent(IconClose).exists()).toBe(true);
    });
});
