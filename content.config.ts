import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const createAuthorSchema = () => z.object({
    name: z.string(),
    to: z.string().optional(),
    target: z.string().optional(),
    avatar: z.object({
        src: z.string().editor({ input: "media" }),
        alt: z.string().optional()
    }).optional()
});

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
        strategies: defineCollection({
            type: "page",
            source: "strategies/*.md",
            schema: z.object({
                date: z.date(),
                minRead: z.number(),
                tags: z.array(z.object({
                    label: z.string(),
                    color: z.enum([
                        "error",
                        "primary",
                        "secondary",
                        "success",
                        "info",
                        "warning",
                        "neutral"
                    ]).optional()
                })),
                title: z.string(),
                description: z.string(),
                image: z.string().editor({ input: "media" }),
                authors: z.array(createAuthorSchema()).optional()
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
                image: z.string().editor({ input: "media" })
            })
        })
    }
});