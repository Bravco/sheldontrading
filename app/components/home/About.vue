<template>
    <UPageSection
        title="About me"
        :ui="{
            container: '!p-0',
            title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
            description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
        }"
    >
        <template #description>
            As a <b>funded $NQ scalper</b> and <b>founder of <ULink to="https://percentbet.com" target="_blank" class="text-info">@PercentBet</ULink></b>,
            I specialize in small-range market movements rather than long swing trades.
            My trading philosophy prioritizes taking shorter high-probability reversals over emotional trend-chasing.
        </template>
    </UPageSection>
</template>