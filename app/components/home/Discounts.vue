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
            <UPageCard
                v-for="(card, index) in cards"
                :key="index"
                v-bind="card"
                target="_blank"
                spotlight
            >
                <template #leading>
                    <NuxtImg
                        :src="card.image"
                        :alt="card.title"
                        width="32"
                        height="32"
                        loading="lazy"
                        class="max-w-18 max-h-8 object-contain rounded"
                    />
                </template>
                <template #title>
                    <span>{{ card.title }}</span>
                    <UIcon name="i-lucide-arrow-up-right" class="size-3 ml-1"/>
                </template>
                <template #description>
                    Code <b>{{ card.code }}</b> for <b>{{ card.discount }}%</b> off
                </template>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script lang="ts" setup>
    const cards = ref([
        {
            title: "For Traders",
            code: "ANDREW",
            discount: 25,
            image: "/images/firms/fortraders.webp",
            to: "https://app.fortraders.com/trading/new-challenge?affiliateCode=ANDREW"
        },
        {
            title: "Lucid Trading",
            code: "ANDREW",
            discount: 50,
            image: "/images/firms/lucidtrading.webp",
            to: "https://lucidtrading.com/ref/andrew"
        },
        {
            title: "FundedNext",
            code: "ANDREW",
            discount: 50,
            image: "/images/firms/fundednext.webp",
            to: "https://fundednext.com/?fpr=ANDREW"
        },
        {
            title: "E8 Markets",
            code: "ANDREW5",
            discount: 50,
            image: "/images/firms/e8.webp",
            to: "https://e8markets.com/d/ANDREW5"
        },
        {
            title: "FX Replay",
            code: "ANDREJ",
            discount: 30,
            image: "/images/firms/fxreplay.webp",
            to: "https://www.fxreplay.com/?utm_campaign=affiliate_program_3030&utm_medium=affiliate&utm_source=rewardful&via=andrej"
        },
        {
            title: "Tradesyncer",
            code: "ANDREW",
            discount: 30,
            image: "/images/firms/tradesyncer.webp",
            to: "https://app.tradesyncer.com/?ref=TSDFDA6B40"
        }
    ]);
</script>