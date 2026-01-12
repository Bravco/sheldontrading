<template>
    <UPage>
        <UPageHero
            :ui="{
                headline: 'flex items-center justify-center',
                title: 'text-shadow-md max-w-lg mx-auto',
                links: 'mt-4 flex-col justify-center items-center'
            }"
        >
            <template #headline>
                <UAvatar
                    class="size-18 ring ring-default ring-offset-3 ring-offset-bg"
                    src="/images/profile-picture.webp"
                    width="72"
                    height="72"
                    alt="profile picture"
                />
            </template>

            <template #title>
                Hey, I'm Sheldon Funded Trader
            </template>

            <template #description>
                I am a <b>funded $NQ scalper</b> and <b>founder of <ULink to="https://percentbet.com" target="_blank" class="text-info">@PercentBet</ULink></b>,
                focused on catching small, consistent moves rather than chasing large trends.
            </template>

            <template #links>
                <div class="flex items-center gap-2">
                    <UButton
                        label="My Strategy"
                        to=""
                        color="neutral"
                    />
                    <UButton
                        label="View Indicators"
                        to=""
                        variant="subtle"
                        color="neutral"
                    />
                    <USeparator class="h-8" orientation="vertical"/>
                    <UButton
                        icon="i-simple-icons-x"
                        to="https://x.com/sheldontrading"
                        target="_blank"
                        size="md"
                        variant="ghost"
                        color="neutral"
                    />
                </div>
            </template>
        </UPageHero>
    </UPage>
</template>