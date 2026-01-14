export default defineAppConfig({
    ui: {
        colors: {
            primary: "indigo",
            neutral: "zinc"
        },
        pageHero: {
            slots: {
                container: "py-18 sm:py-24 lg:py-32",
                title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
                description: "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted"
            }
        },
        prose: {
            img: {
                slots: {
                    base: "border border-default"
                }
            }
        }
    },
    footer: {
        links: [
            {
                icon: "i-simple-icons-tradingview",
                to: "https://www.tradingview.com/u/sheldontrading/",
                target: "_blank",
                "aria-label": "Sheldon on TradingView"
            },
            {
                icon: "i-simple-icons-x",
                to: "https://x.com/sheldontrading",
                target: "_blank",
                "aria-label": "Sheldon on Twitter"

            }
        ]
    }
});