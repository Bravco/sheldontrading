<template>
    <UPageSection
        title="Experience"
        :ui="{
            container: '!p-0 gap-4 sm:gap-4',
            title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium'
        }"
    >
        <ul class="flex flex-col gap-2">
            <Motion
                v-for="(item, index) in items"
                :key="`${item.period}-${item.name}`"
                as="li"
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ delay: Math.min(index, 4) * 0.1 }"
                :in-view-options="{ once: true }"
                class="text-sm text-muted flex items-center whitespace-nowrap gap-2"
            >
                <p>{{ item.period }}</p>
                <USeparator />
                <ULink
                    :to="item.url"
                    target="_blank"
                    class="flex items-center gap-1"
                >
                    <span>Funded Trader at</span>
                    <span class="text-highlighted font-medium">{{ item.name }}</span>
                    <NuxtImg
                        :src="item.image"
                        :alt="item.name"
                        width="32"
                        height="32"
                        loading="lazy"
                        class="max-w-18 max-h-8 object-contain rounded"
                    />
                </ULink>
            </Motion>
        </ul>
    </UPageSection>
</template>

<script lang="ts" setup>
    const items = [
        { period: "2024", name: "For Traders", image: "/images/firms/fortraders.webp", url: "https://app.fortraders.com/trading/new-challenge?affiliateCode=ANDREW" },
        { period: "2025", name: "Topstep", image: "/images/firms/topstep-gold.webp", url: "https://www.topstep.com" },
        { period: "2026", name: "Lucid Trading", image: "/images/firms/lucidtrading.webp", url: "https://lucidtrading.com/ref/andrew" },
        { period: "2026", name: "MyFundedFutures", image: "/images/firms/mffu.webp", url: "https://myfundedfutures.com" },
        { period: "2026", name: "FundedNext", image: "/images/firms/fundednext.webp", url: "https://fundednext.com/?fpr=ANDREW" },
        { period: "2026", name: "E8 Markets", image: "/images/firms/e8.webp", url: "https://e8markets.com/d/ANDREW5" },
        { period: "2026", name: "Vest", image: "/images/firms/vest.webp", url: "https://next.vestmarkets.com/r/andrew" }
    ];
</script>