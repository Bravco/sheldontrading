<template>
    <UPageSection
        title="Discounts"
        description="Thank you for the support ❤"
        :ui="{
            container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
            title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
            description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
        }"
    >
        <UPageGrid>
            <div
                v-for="card in cards"
                :key="card.title"
                :class="card.featured ? featuredWrapperClass : 'contents'"
                :style="{ '--card-color': card.accent }"
            >
                <UBadge
                    v-if="card.featured"
                    label="Top pick"
                    icon="i-lucide-star"
                    color="warning"
                    variant="solid"
                    size="sm"
                    class="absolute -top-2.5 right-4 z-10 shadow-lg"
                />

                <UPageCard
                    :to="card.to"
                    target="_blank"
                    spotlight
                    :class="card.featured ? featuredCardClass : cardClass"
                >
                    <template #leading>
                        <NuxtImg
                            :src="card.image"
                            :alt="card.title"
                            width="32"
                            height="32"
                            loading="lazy"
                            class="max-w-18 max-h-8 object-contain rounded transition-transform duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-3"
                        />
                    </template>
                    <template #title>
                        <span>{{ card.title }}</span>
                        <UIcon
                            name="i-lucide-arrow-up-right"
                            class="size-3 ml-1 transition duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 group-hover:text-(--card-color)"
                        />
                    </template>
                    <template #description>
                        <template v-if="card.code">
                            Code <b>{{ card.code }}</b> for <b>{{ card.discount }}%</b> off
                        </template>
                        <template v-else>
                            Partnership
                        </template>
                    </template>
                </UPageCard>
            </div>
        </UPageGrid>
    </UPageSection>
</template>

<script lang="ts" setup>
    const colorMode = useColorMode();
    const isLight = computed(() => colorMode.value === "light");

    const cardClass = [
        "group transition duration-300",
        "bg-(color:--card-color)/6 ring-2 ring-(color:--card-color)/30",
        "hover:bg-(color:--card-color)/12 hover:ring-(color:--card-color)/70",
        "hover:shadow-xl hover:shadow-(color:--card-color)/30 motion-safe:hover:-translate-y-1",
        "[--spotlight-color:color-mix(in_oklab,var(--card-color)_35%,transparent)]"
    ].join(" ");

    const featuredWrapperClass = [
        "featured-border relative h-full",
        "transition duration-300",
        "hover:shadow-xl hover:shadow-(color:--card-color)/30 motion-safe:hover:-translate-y-1"
    ].join(" ");

    const featuredCardClass = [
        "featured-inner featured-shimmer group relative h-full overflow-hidden transition duration-300 ring-0",
        "bg-[color-mix(in_oklab,var(--card-color)_8%,var(--ui-bg))]",
        "hover:bg-[color-mix(in_oklab,var(--card-color)_14%,var(--ui-bg))]",
        "[--spotlight-color:color-mix(in_oklab,var(--card-color)_35%,transparent)]"
    ].join(" ");

    const cards = computed(() => [
        {
            title: "Lucid Trading",
            accent: "#97a3b5",
            code: "ANDREW",
            discount: 30,
            image: "/images/firms/lucidtrading.webp",
            to: "https://lucidtrading.com/ref/andrew",
            featured: true
        },
        {
            title: "Vest",
            accent: "#00d98e",
            code: "ANDREW",
            discount: 5,
            image: "/images/firms/vest.webp",
            to: "https://next.vestmarkets.com/r/andrew",
            featured: true
        },
        {
            title: "Topstep",
            accent: isLight.value ? "#000000" : "#ffffff",
            code: "TS-FBVDIM3B1XF3U",
            discount: 15,
            image: "/images/firms/topstep.webp",
            to: "https://dashboard.topstep.com/"
        },
        {
            title: "FundedNext",
            accent: "#6d5ecd",
            code: "ANDREW",
            discount: 55,
            image: "/images/firms/fundednext.webp",
            to: "https://fundednext.com/?fpr=ANDREW"
        },
        {
            title: "Blue Guardian",
            accent: "#3b85ab",
            code: "ANDREW",
            discount: 50,
            image: "/images/firms/blueguardian.webp",
            to: "https://blueguardian.com/?afmc=ANDREW"
        },
        {
            title: "E8 Markets",
            accent: "#66bccd",
            code: "ANDREW5",
            discount: 50,
            image: "/images/firms/e8.webp",
            to: "https://e8markets.com/d/ANDREW5"
        },
        {
            title: "Breakout",
            accent: "#0b73a8",
            code: "ANDREW",
            discount: 5,
            image: "/images/firms/breakout.webp",
            to: "https://www.breakoutprop.com/join/andrew/"
        },
        {
            title: "Tradesyncer",
            accent: "#4459eb",
            code: "ANDREW",
            discount: 30,
            image: "/images/firms/tradesyncer.webp",
            to: "https://app.tradesyncer.com/?ref=TSDFDA6B40"
        },
        {
            title: "FX Replay",
            accent: isLight.value ? "#000000" : "#ffffff",
            code: "ANDREJ",
            discount: 30,
            image: "/images/firms/fxreplay.webp",
            to: "https://www.fxreplay.com/?utm_campaign=affiliate_program_3030&utm_medium=affiliate&utm_source=rewardful&via=andrej"
        }
    ]);
</script>

<style>
    @property --featured-angle {
        syntax: "<angle>";
        inherits: false;
        initial-value: 0deg;
    }

    .featured-border {
        padding: 2px;
        border-radius: var(--radius-xl, 0.75rem);
        background:
            conic-gradient(
                from var(--featured-angle),
                transparent 0%,
                var(--card-color) 20%,
                #fff 30%,
                var(--card-color) 40%,
                transparent 60%
            ),
            color-mix(in oklab, var(--card-color) 25%, transparent);
        animation: featured-spin 4s linear infinite;
    }

    .featured-inner {
        border-radius: calc(var(--radius-xl, 0.75rem) - 2px);
    }

    .featured-shimmer::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%);
        background-size: 250% 100%;
        animation: featured-shimmer 4s ease-in-out infinite;
        pointer-events: none;
    }

    @keyframes featured-spin {
        to {
            --featured-angle: 360deg;
        }
    }

    @keyframes featured-shimmer {
        from {
            background-position: 150% 0;
        }
        to {
            background-position: -50% 0;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .featured-border,
        .featured-shimmer::after {
            animation: none;
        }
    }
</style>