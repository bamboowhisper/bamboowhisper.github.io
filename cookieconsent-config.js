import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "This website uses cookies to provide a better user experience. We use cookies to personalize content, analyze site traffic. You can manage your cookie preferences in your browser settings. By continuing to use this site, you agree to our use of cookies. You can choose to accept cookies, reject cookies, or customize your preferences.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/privacy/\">Privacy Policy</a>\n<a href=\"/terms/\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Basic analytics data"
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "We use Google Analytics to have a basic understanding and vision where our clients come from",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"contact@bamboowhispertravel.com\">contact me</a>."
                        }
                    ]
                }
            }
        }
    }
});