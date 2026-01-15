<template>
    <UPage>
        <HomeHero/>
        <UPageSection :ui="{ container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8' }">
            <HomeAbout/>
            <HomeExperience/>
        </UPageSection>
        <HomeLatest/>
    </UPage>
</template>