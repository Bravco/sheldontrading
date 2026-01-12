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
        <UPageSection :ui="{ container: '!pt-0' }"></UPageSection>
    </UPage>
</template>