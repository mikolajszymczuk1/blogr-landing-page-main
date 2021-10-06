import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import HomeFooter from "@/components/layout/HomeFooter.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HomeFooter.vue", () => {
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

    test("allNavigationLinks length should be equal to amount of footer-category elements", () => {
        const wrapper = mount(HomeFooter, { store, localVue });
        let categoriesLength = wrapper.findAll(".footer__category").length;
        expect(state.allNavigationLinks.length).toBe(categoriesLength);
    });

    test("Should correctly generate links based on allNavigationLinks", () => {
        const wrapper = mount(HomeFooter, { store, localVue });
        let categories = wrapper.findAll(".footer__category");

        for (let i = 0; i < categories.length; i++) {
            let currentStateCategory = state.allNavigationLinks[i];
            let currentCategory = categories.at(i);
            let heading = currentCategory.find(".footer__category-name");
            let links = currentCategory.findAll(".footer__link");

            expect(heading.text()).toBe(currentStateCategory.name);

            for (let j = 0; j < links.length; j++) {
                let link = links.at(j);
                expect(link.attributes("href")).toBe(currentStateCategory.links[j].url);
                expect(link.text()).toBe(currentStateCategory.links[j].linkName);
            }

        }
    });
});
