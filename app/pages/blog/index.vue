<template>
    <UPage>
        <UPageHero
            title="Latest Articles"
            description="Some of my recent thoughts on trading, technical analysis, and trading psychology."
            :ui="{
                title: '!mx-0 text-left',
                description: '!mx-0 text-left',
                links: 'justify-start'
            }"
        />
        <UPageSection :ui="{ container: '!pt-0' }">
            <UBlogPosts v-if="posts" orientation="vertical">
                <Motion
                    v-for="(post, index) in posts"
                    :key="index"
                    :initial="{ opacity: 0, transform: 'translateY(10px)' }"
                    :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
                    :transition="{ delay: 0.2 * index }"
                    :in-view-options="{ once: true }"
                >
                    <UBlogPost
                        orientation="horizontal"
                        variant="naked"
                        :to="post.path"
                        v-bind="post"
                    />
                </Motion>
            </UBlogPosts>
        </UPageSection>
    </UPage>
</template>

<script lang="ts" setup>
    const { data: posts } = await useAsyncData("posts", () => queryCollection("blog").order("date", "DESC").all());
</script>