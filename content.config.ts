import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        indicators: defineCollection({
            type: "data",
            source: "indicators/*.yml",
            schema: z.object({
                author: z.string().nonempty(),
                title: z.string().nonempty(),
                description: z.string().nonempty(),
                image: z.string().nonempty().editor({ input: "media" }),
                url: z.string().nonempty(),
            })
        }),
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