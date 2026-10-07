import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The handbook stays in docs/, so contributors edit Markdown without touching
// the site code.
const handboek = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './docs' }),
    schema: z.object({
        // One sentence on what the page covers, shown in the section overview.
        description: z.string().optional(),
        hero: z.boolean().optional(),
        // Entry ids for "Lees ook", in place of the other pages of the section.
        related: z.array(z.string()).max(5).optional(),
    }),
});

export const collections = { handboek };
