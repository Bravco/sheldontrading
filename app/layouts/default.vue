<template>
    <div>
        <UContainer class="pt-10 sm:border-x border-default">
            <div class="fixed top-2 sm:top-4 inset-x-0 flex justify-center z-10">
                <UNavigationMenu
                    :items="links"
                    variant="link"
                    color="neutral"
                    class="bg-muted/80 backdrop-blur-sm supports-backdrop-filter:backdrop-blur-sm supports--webkit-backdrop-filter:backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
                    :ui="{ link: 'px-2 py-1' }"
                >
                    <template #list-trailing>
                        <ColorModeButton class="cursor-pointer"/>
                    </template>
                </UNavigationMenu>
            </div>
            <slot/>
            <UFooter class="bg-default z-10" :ui="{ left: 'text-xs text-muted' }">
                <template #left>
                    &copy; {{ new Date().getFullYear() }} | All rights reserved.
                </template>
                <template #right>
                    <UButton
                        v-for="(link, index) in footer.links"
                        :key="index"
                        v-bind="link"
                        size="xs"
                        variant="ghost"
                        color="neutral"
                    />
                </template>
            </UFooter>
        </UContainer>
    </div>
</template>

<script lang="ts" setup>
    import type { NavigationMenuItem } from "@nuxt/ui";

    const { footer } = useAppConfig();

    const links = ref<NavigationMenuItem[]>([
        {
            label: "Home",
            to: "/"
        },
        {
            label: "Indicators",
            to: "/indicators"
        },
        {
            label: "Strategies",
            to: "/strategies"
        },
        {
            label: "Blog",
            to: "/blog"
        },
        {
            label: "Twitter",
            to: "https://x.com/sheldontrading",
            target: "_blank"
        }
    ]);
</script>