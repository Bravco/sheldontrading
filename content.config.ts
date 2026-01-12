import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: "page",
            source: "blog/*.md",
            schema: z.object({
                date: z.date(),
                minRead: z.number(),
                title: z.string(),
                description: z.string(),
                image: z.string()
            })
        })
    }
});