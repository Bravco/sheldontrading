<template>
    <UPageSection
        title="Experience"
        :ui="{
            container: '!p-0 gap-4 sm:gap-4',
            title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
            description: 'mt-2'
        }"
    >
        <template #description>
            <div class="flex flex-col gap-2">
                <Motion
                    v-for="(item, index) in items"
                    :key="index"
                    :initial="{ opacity: 0, transform: 'translateY(20px)' }"
                    :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
                    :transition="{ delay: 0.4 + 0.2 * index }"
                    :in-view-options="{ once: true }"
                    class="text-sm text-muted flex items-center text-nowrap gap-2"
                >
                    <p>{{ item.period }}</p>
                    <USeparator/>
                    <ULink :to="item.company.url" target="_blank" class="flex items-center gap-1">
                        <span>{{ item.role }} at</span>
                        <div class="inline-flex items-center gap-1">
                            <span class="text-highlighted font-medium">{{ item.company.name }}</span>
                            <NuxtImg
                                :src="item.company.image"
                                :alt="item.company.name"
                                width="32"
                                height="32"
                                loading="lazy"
                                class="max-w-18 max-h-8 object-contain rounded"
                            />
                        </div>
                    </ULink>
                </Motion>
            </div>
        </template>
    </UPageSection>
</template>

<script lang="ts" setup>
    const items = [
        {
            period: "2024",
            role: "Funded Trader",
            company: {
                name: "For Traders",
                image: "/images/firms/fortraders.webp",
                url: "https://app.fortraders.com/trading/new-challenge?affiliateCode=ANDREW"
            }
        },
        {
            period: "2025",
            role: "Funded Trader",
            company: {
                name: "Topstep",
                image: "/images/firms/topstep.webp",
                url: "https://www.topstep.com"
            }
        },
        {
            period: "2026",
            role: "Funded Trader",
            company: {
                name: "Lucid Trading",
                image: "/images/firms/lucidtrading.webp",
                url: "https://lucidtrading.com/ref/andrew"
            }
        },
        {
            period: "2026",
            role: "Funded Trader",
            company: {
                name: "MyFundedFutures",
                image: "/images/firms/mffu.webp",
                url: "https://myfundedfutures.com"
            }
        },
        {
            period: "2026",
            role: "Funded Trader",
            company: {
                name: "FundedNext",
                image: "/images/firms/fundednext.webp",
                url: "https://fundednext.com/?fpr=ANDREW"
            }
        },
        {
            period: "2026",
            role: "Funded Trader",
            company: {
                name: "E8 Markets",
                image: "/images/firms/e8.webp",
                url: "https://e8markets.com/d/ANDREW5"
            }
        }
    ];
</script>