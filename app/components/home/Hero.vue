<template>
    <UPageHero
        :ui="{
            headline: 'flex flex-col items-center justify-center gap-4',
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
                    class="size-18 ring ring-primary ring-offset-3 ring-offset-bg"
                />
            </Motion>
            <Motion
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: 0.1 }"
            >
                <UBadge color="success" variant="soft">
                    <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    Live Trading Everyday at <b>9:30 AM EST</b>
                </UBadge>
            </Motion>
        </template>

        <template #title>
            <Motion
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: 0.1 }"
            >
                Hey, I'm <span class="text-primary">Andrew</span> Funded Trader
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
                <div
                    class="group relative inline-flex overflow-hidden rounded-lg bg-primary/20 p-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40"
                >
                    <span
                        aria-hidden="true"
                        class="absolute left-0 top-0 size-20 animate-border-travel motion-reduce:hidden [offset-path:rect(0_100%_100%_0_round_0.5rem)] [offset-rotate:0deg] bg-[radial-gradient(circle,white_0%,var(--ui-primary)_30%,transparent_70%)]"
                    />
                    <UButton
                        class="relative z-10 overflow-hidden transition-transform duration-300 active:scale-95
                            before:pointer-events-none before:absolute before:inset-y-0 before:-left-full before:w-1/2 before:-skew-x-20
                            before:bg-white/25 before:transition-none
                            group-hover:before:translate-x-[400%] group-hover:before:transition-transform group-hover:before:duration-700 motion-reduce:before:hidden"
                        label="Join Free Discord"
                        to="https://whop.com/joined/andrewtrades/free-discord-K3M40MjKQwQrgt/app/"
                        target="_blank"
                        icon="i-simple-icons-discord"
                        trailing-icon="i-lucide-arrow-up-right"
                    />
                </div>
            </Motion>

            <div class="inline-flex gap-x-4">
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

        <UMarquee
            class="py-6 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:50s] [--gap:--spacing(5)]"
            :ui="{ root: 'items-center' }"
        >
            <Motion
                v-for="index in 9"
                :key="index"
                class="shrink-0"
                :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
                :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.6, delay: index * 0.1 }"
            >
                <NuxtImg
                    :src="`/images/hero/trade-${index}.webp`"
                    :alt="`Trade Example ${index}`"
                    width="721"
                    height="901"
                    sizes="192px sm:224px lg:288px"
                    loading="lazy"
                    class="w-48 sm:w-56 lg:w-72 aspect-721/901 object-cover rounded-lg border border-default shadow-lg"
                    :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
                />
            </Motion>
        </UMarquee>
    </UPageHero>
</template>

<script lang="ts" setup>
    const { footer } = useAppConfig();
</script>