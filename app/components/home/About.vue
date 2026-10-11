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
            NQ scalper trading since <b>September 2023</b>,
            specializing in high-probability low RR setups with a <b>~70% win rate</b> and <b>averge 1.5 RR</b>.
            Funded with all major prop firms.
        </template>
    </UPageSection>
</template>