import { defineCollection, z } from "astro:content";

// Definimos la forma del objeto
const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            arg: z.string(),
        }),
    }),
});

// Exportamos la colección
export const collections = { books };
