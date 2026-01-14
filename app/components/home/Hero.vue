<template>
    <UPageHero
        :ui="{
            headline: 'flex items-center justify-center',
            title: 'text-shadow-md max-w-lg mx-auto',
            links: 'mt-4 flex-col justify-center items-center'
        }"
    >
        <template #headline>
            <Motion
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: 0.1 }"
            >
                <LazyUAvatar
                    src="/images/profile-picture.webp"
                    width="72"
                    height="72"
                    alt="Profile Picture"
                    class="size-18 ring ring-default ring-offset-3 ring-offset-bg"
                />
            </Motion>
        </template>

        <template #title>
            <Motion
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: 0.1 }"
            >
                Hey, I'm Sheldon Funded Trader
            </Motion>
        </template>

        <template #description>
            <Motion
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: 0.3 }"
            >
                I am a <b>funded $NQ scalper</b> focused on catching small,
                consistent moves rather than chasing large trends.
            </Motion>
        </template>

        <template #links>
            <Motion
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: 0.5 }"
            >
                <div class="flex items-center gap-2">
                    <UButton
                        label="View Indicators"
                        to="/indicators"
                        color="neutral"
                    />
                    <UButton
                        label="Learn Strategies"
                        to="/strategies"
                        variant="subtle"
                        color="neutral"
                    />
                </div>
            </Motion>

            <div class="inline-flex gap-x-4 mt-4">
                <Motion
                    v-for="(link, index) in footer.links"
                    :key="index"
                    :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                    :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.6, delay: 0.5 + index * 0.1 }"
                >
                    <UButton
                        v-bind="link"
                        size="md"
                        color="neutral"
                        variant="ghost"
                    />
                </Motion>
            </div>
        </template>

        <UMarquee class="py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]">
            <Motion
                v-for="index in 9"
                :key="index"
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: index * 0.1 }"
            >
                <NuxtImg
                    :src="`/images/hero/trade-${index}.webp`"
                    :alt="`Trade Example ${index}`"
                    width="250"
                    height="250"
                    loading="lazy"
                    class="aspect-square object-cover rounded-lg border border-default"
                    :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
                />
            </Motion>
        </UMarquee>
    </UPageHero>
</template>

<script lang="ts" setup>
    const { footer } = useAppConfig();
</script>