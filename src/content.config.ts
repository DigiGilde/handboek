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
        // Entry ids for "Lees ook", in place of the other pages of the section.
        related: z.array(z.string()).max(5).optional(),
        // Only on docs/projecten.md: the projects page, and "Waar we aan werken" on the home page.
        projects: z
            .array(
                z.object({
                    title: z.string(),
                    href: z.url().optional(),
                    code: z.url().optional(),
                    summary: z.string(),
                    description: z.string(),
                    kind: z.enum(['Programma', 'Verkenning', 'Product']),
                    home: z.boolean().optional(),
                }),
            )
            .optional(),
    }),
});

export const collections = { handboek };
