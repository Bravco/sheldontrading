<template>
    <UPageSection
        title="Latest Articles"
        description="Some of my most recent thoughts on trading."
        :ui="{
            container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
            title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
            description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
        }"
    >
        <UBlogPosts v-if="latest" orientation="vertical" class="lg:gap-y-4 gap-4">
            <UBlogPost
                v-for="(post, index) in latest"
                :key="index"
                orientation="horizontal"
                variant="naked"
                :to="post.path"
                v-bind="post"
                :authors="undefined"
                :ui="{
                    root: 'group relative lg:items-start lg:flex ring-0 hover:ring-0',
                    body: '!px-0',
                    header: 'hidden'
                }"
            >
                <template #footer>
                    <ULink
                        :to="post.path"
                        class="flex items-center text-sm font-medium text-primary"
                    >
                        Read Article
                        <UIcon
                            name="i-lucide-arrow-right"
                            class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                    </ULink>
                </template>
            </UBlogPost>
        </UBlogPosts>
    </UPageSection>
</template>

<script lang="ts" setup>
    const { data: latest } = await useAsyncData("latest", async () => {
        const [blog, strategies] = await Promise.all([
            queryCollection("blog").order("date", "DESC").limit(3).all(),
            queryCollection("strategies").order("date", "DESC").limit(3).all()
        ]);

        return [...blog, ...strategies].sort((a, b) =>
            new Date(b.date as string).getTime() - 
            new Date(a.date as string).getTime()
        ).slice(0, 3);
    });
</script>