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
        <UBlogPosts v-if="posts" orientation="vertical" class="lg:gap-y-4 gap-4">
            <UBlogPost
                v-for="(post, index) in posts"
                :key="index"
                orientation="horizontal"
                variant="naked"
                :to="post.path"
                v-bind="post"
                :ui="{
                    root: 'group relative lg:items-start lg:flex ring-0 hover:ring-0',
                    body: '!px-0',
                    header: 'hidden'
                }"
            >
                <template #footer>
                    <UButton
                        :to="post.path"
                        label="Read Article"
                        size="xs"
                        variant="link"
                        class="px-0 gap-0"
                    >
                        <template #trailing>
                            <UIcon
                                name="i-lucide-arrow-right"
                                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                            />
                        </template>
                    </UButton>
                </template>
            </UBlogPost>
        </UBlogPosts>
    </UPageSection>
</template>

<script lang="ts" setup>
    const { data: posts } = await useAsyncData("home-posts", () =>
        queryCollection("blog").order("date", "DESC").limit(3).all()
    );
</script>