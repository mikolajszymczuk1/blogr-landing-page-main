import { mount } from "@vue/test-utils";
import NavigationDropDownLink from "@/components/navigation/NavigationDropDownLink.vue";

describe("NavigationDropDownLink.vue", () => {
    test("dropdown name should be equal to dropdown prop", () => {
        const wrapper = mount(NavigationDropDownLink, {
            propsData: {
                dropdownName: "Contact"
            }
        });

        let span = wrapper.find(".dropdown-link__dropdown-name");
        expect(wrapper.props("dropdownName")).toBe("Contact");
        expect(span.text()).toBe(wrapper.props("dropdownName"));
    });

    test("should show default slot", () => {
        const wrapper = mount(NavigationDropDownLink, {
            propsData: {
                dropdownName: "Contact"
            },
            slots: {
                default: "<h1>test content</h1>"
            }
        });

        let content = wrapper.find(".dropdown-link__content");
        expect(content.html()).toContain("<h1>test content</h1>");
    });
});
