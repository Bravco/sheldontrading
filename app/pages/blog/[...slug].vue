<template>
    <UMain class="mt-20 px-2">
        <UContainer class="relative min-h-screen">
            <UPage v-if="post">
                <ULink to="/blog" class="text-sm flex items-center gap-1">
                    <UIcon name="lucide:chevron-left"/>
                    Blog
                </ULink>
                <div class="flex flex-col gap-3 mt-8">
                    <div class="flex text-xs text-muted items-center justify-center gap-2">
                        <span v-if="post.date">{{ formatDate(post.date) }}</span>
                        <span v-if="post.date && post.minRead">•</span>
                        <span v-if="post.minRead">{{ post.minRead }} min. read</span>
                    </div>
                    <NuxtImg
                        :src="post.image"
                        :alt="post.title"
                        class="w-full h-80 object-cover object-center rounded-lg border border-default"
                    />
                    <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">{{ post.title }}</h1>
                    <p class="text-muted text-center max-w-2xl mx-auto">{{ post.description }}</p>
                </div>
                <UPageBody class="max-w-3xl mx-auto">
                    <ContentRenderer
                        v-if="post.body"
                        :value="post"
                    />
                    <UContentSurround :surround/>
                </UPageBody>
            </UPage>
        </UContainer>
    </UMain>
</template>

<script lang="ts" setup>
    const route = useRoute();

    const { data: post } = await useAsyncData(route.path, () =>
        queryCollection("blog").path(route.path).first()
    );

    const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
        queryCollectionItemSurroundings("blog", route.path, { fields: [ "description" ] })
    );

    const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric" 
    });
</script>