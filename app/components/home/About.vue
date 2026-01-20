<template>
    <UPageSection
        title="About me"
        :links="[{
            label: 'Trading Journal Notion Template',
            to: 'https://wholesale-tennis-ed2.notion.site/Forever-Model-Trading-Journal-2eef2c74216180faad34ff48abd20e53?source=copy_link',
            target: '_blank',
            variant: 'subtle',
            color: 'neutral',
            size: 'sm',
            trailingIcon: 'i-lucide-arrow-up-right'
        }]"
        :ui="{
            container: '!p-0',
            title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
            description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted',
            footer: 'mt-4',
            links: 'justify-start'
        }"
    >
        <template #description>
            As a <b>funded $NQ scalper</b>,
            I specialize in small-range market movements rather than long swing trades.
            My trading philosophy prioritizes taking shorter high-probability reversals over emotional trend-chasing.
        </template>
    </UPageSection>
</template>