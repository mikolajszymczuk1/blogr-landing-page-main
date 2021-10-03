import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
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
});
