<template>
    <UPage>
        <UPageHero
            title="Designing Indicators, Building Strategies."
            description="Here are some custom TradingView indicators that I use to simplify trading."
            :ui="{
                title: '!mx-0 text-left',
                description: '!mx-0 text-left',
                links: 'justify-start'
            }"
        />
        <UPageSection v-if="indicators" :ui="{ container: '!pt-0' }">
            <Motion
                v-for="(indicator, index) in indicators"
                :key="index"
                :initial="{ opacity: 0, transform: 'translateY(10px)' }"
                :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
                :transition="{ delay: 0.2 * index }"
                :in-view-options="{ once: true }"
            >
                <UPageCard
                    :title="indicator.title"
                    :description="indicator.description"
                    :to="indicator.url"
                    target="_blank"
                    orientation="horizontal"
                    variant="naked"
                    class="group"
                >
                    <NuxtImg
                        :src="indicator.image"
                        :alt="indicator.title"
                        class="w-full aspect-video object-cover rounded-lg border border-default"
                    />
                    <template #leading>
                        <span class="text-xs text-muted">
                            Created by <span class="font-medium">{{ indicator.author }}</span>
                        </span>
                    </template>
                    <template #footer>
                        <ULink  
                            :to="indicator.url"
                            target="_blank"
                            class="flex items-center text-sm font-medium text-primary"
                        >
                            View Indicator
                            <UIcon
                                name="i-lucide-arrow-right"
                                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                            />
                        </ULink>
                    </template>
                </UPageCard>
            </Motion>
        </UPageSection>
    </UPage>
</template>

<script lang="ts" setup>
    const { data: indicators } = await useAsyncData("indicators", () => queryCollection("indicators").all());
</script>