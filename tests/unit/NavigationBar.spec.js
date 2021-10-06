import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import NavigationBar from "@/components/navigation/NavigationBar.vue";
import NavigationBurgerIcon from "@/components/navigation/NavigationBurgerIcon.vue";
import NavigationDropDownLink from "@/components/navigation/NavigationDropDownLink.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("NavigationBar.vue", () => {
    let state;
    let store;

    beforeEach(() => {
        state = {
            allNavigationLinks: [
                {
                    name: "Product",
                    links: [
                        { linkName: "Overview", url: "#Overview" },
                        { linkName: "Pricing", url: "#Pricing" },
                        { linkName: "Marketplace", url: "#Marketplace" },
                        { linkName: "Features", url: "#Features" },
                        { linkName: "Integrations", url: "#Integrations" }
                    ]
                },
                {
                    name: "Company",
                    links: [
                        { linkName: "About", url: "#About" },
                        { linkName: "Team", url: "#Team" },
                        { linkName: "Blog", url: "#Blog" },
                        { linkName: "Careers", url: "#Careers" }
                    ]
                },
                {
                    name: "Connect",
                    links: [
                        { linkName: "Contact", url: "#Contact" },
                        { linkName: "Newsletter", url: "#Newsletter" },
                        { linkName: "LinkedIn", url: "#LinkedIn" }
                    ]
                }
            ]
        }

        store = new Vuex.Store({
            state
        });
    });

    test("by default, navigation menu should not exists", () => {
        const wrapper = mount(NavigationBar, { store, localVue });
        let menu = wrapper.find(".navigation-bar__content");
        expect(menu.classes()).not.toContain("navigation-bar__content--active");
    });
    
    test("when click hamburger icon, should show menu add class", async () => {
        const wrapper = mount(NavigationBar, { store, localVue });
        await wrapper.findComponent(NavigationBurgerIcon).trigger("click");
        let menu = wrapper.find(".navigation-bar__content");
        expect(menu.classes()).toContain("navigation-bar__content--active");
    });

    test("Should correctly generate links based on allNavigationLinks", () => {
        const wrapper = mount(NavigationBar, { store, localVue });
        let dropdowns = wrapper.findAllComponents(NavigationDropDownLink);

        for (let i = 0; i < dropdowns.length; i++) {
            let currentStateDropdown = state.allNavigationLinks[i];
            let currentDropdown = dropdowns.at(i);
            let links = currentDropdown.findAll("navigation-bar__link");

            for (let j = 0; j < links.length; j++) {
                let link = links.at(j);
                expect(link.attributes("href")).toBe(currentStateDropdown.links[j].url);
                expect(link.text()).toBe(currentStateDropdown.links[j].linkName);
            }

        }
    });
});
