<template>
    <UMain class="mt-20 px-2">
        <UContainer class="relative min-h-screen">
            <UPage v-if="strategy">
                <ULink to="/strategies" class="text-sm flex items-center gap-1">
                    <UIcon name="lucide:chevron-left"/>
                    Strategies
                </ULink>
                <div class="flex flex-col gap-3 mt-8">
                    <div class="flex text-xs text-muted items-center justify-center gap-2">
                        <span v-if="strategy.date">{{ formatDate(strategy.date) }}</span>
                        <span v-if="strategy.date && strategy.minRead">•</span>
                        <span v-if="strategy.minRead">{{ strategy.minRead }} min. read</span>
                    </div>
                    <NuxtImg
                        :src="strategy.image"
                        :alt="strategy.title"
                        class="w-full h-80 object-cover object-center rounded-lg border border-default"
                    />
                    <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">{{ strategy.title }}</h1>
                    <p class="text-muted text-center max-w-2xl mx-auto">{{ strategy.description }}</p>
                    <div class="flex items-center justify-center gap-2">
                        <UBadge
                            v-for="(tag, index) in strategy.tags"
                            :key="index"
                            :label="tag.label"
                            :color="tag.color"
                            variant="soft"
                        />
                    </div>
                </div>
                <UPageBody class="max-w-3xl mx-auto">
                    <ContentRenderer
                        v-if="strategy.body"
                        :value="strategy"
                    />
                    <UContentSurround :surround/>
                </UPageBody>
            </UPage>
        </UContainer>
    </UMain>
</template>

<script lang="ts" setup>
    const route = useRoute();

    const { data: strategy } = await useAsyncData(route.path, () =>
        queryCollection("strategies").path(route.path).first()
    );

    const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
        queryCollectionItemSurroundings("strategies", route.path, { fields: [ "description" ] })
    );

    if (strategy.value) {
        useSeoMeta({
            title: strategy.value.title,
            ogTitle: strategy.value.title,
            twitterTitle: strategy.value.title,
            description: strategy.value.description,
            ogDescription: strategy.value.description,
            twitterDescription: strategy.value.description,
            ogImage: strategy.value.image,
            twitterImage: strategy.value.image,
            twitterCard: "summary_large_image"
        });
    }
</script>