<template>
    <UPage>
        <UPageHero
            title="Backtested & Optimized Trading Strategies."
            description="Here are my best picks of trading strategies that have made me a profitable trader."
            :ui="{
                title: '!mx-0 text-left',
                description: '!mx-0 text-left',
                links: 'justify-start'
            }"
        />
        <UPageSection :ui="{ container: '!pt-0' }">
            <UBlogPosts v-if="strategies" orientation="vertical">
                <Motion
                    v-for="(strategy, index) in strategies"
                    :key="strategy.path"
                    :initial="{ opacity: 0, transform: 'translateY(10px)' }"
                    :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
                    :transition="{ delay: 0.2 * index }"
                    :in-view-options="{ once: true }"
                >
                    <UBlogPost
                        orientation="horizontal"
                        variant="naked"
                        :to="strategy.path"
                        v-bind="strategy"
                        :date="undefined"
                        :ui="{ header: 'border border-default' }"
                    >
                        <template #badge>
                            <UBadge
                                v-for="(tag, index) in strategy.tags"
                                :key="index"
                                :label="tag.label"
                                :color="tag.color"
                                variant="soft"
                            />
                        </template>
                    </UBlogPost>
                </Motion>
            </UBlogPosts>
        </UPageSection>
    </UPage>
</template>

<script lang="ts" setup>
    const { data: strategies } = await useAsyncData("strategies", () =>
        queryCollection("strategies").all()
    );
</script>