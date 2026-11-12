import { z } from "zod";

export const createBookSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Book title is required")
        .max(200),

    isbn: z
        .string()
        .trim()
        .max(20)
        .optional(),

    description: z
        .string()
        .trim()
        .optional(),

    published_year: z
        .number()
        .int()
        .min(1000)
        .max(new Date().getFullYear())
        .optional(),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;