<template>
    <UPageSection
        title="Trading Experience"
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
                    class="text-muted flex items-center text-nowrap gap-2"
                >
                    <p class="text-sm">{{ item.period }}</p>
                    <USeparator/>
                    <ULink :to="item.company.url" target="_blank" class="flex items-center gap-1">
                        <span class="text-sm">{{ item.role }} at</span>
                        <div class="inline-flex items-center gap-1">
                            <span class="text-highlighted font-medium">{{ item.company.name }}</span>
                            <NuxtImg
                                :src="item.company.logo"
                                :alt="item.company.name"
                                width="32"
                                height="32"
                                loading="lazy"
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
            period: "2023 - 2024",
            role: "Funded Trader",
            company: {
                name: "For Traders",
                logo: "/images/fortraders.webp",
                url: "https://app.fortraders.com/trading/new-challenge?affiliateCode=SHELDON"
            }
        },
        {
            period: "2024 - Present",
            role: "Funded Trader",
            company: {
                name: "Topstep",
                logo: "/images/topstep.webp",
                url: "https://www.topstep.com"
            }
        }
    ];
</script>