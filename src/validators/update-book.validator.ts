import { z } from "zod";

export const updateBookSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Book title cannot be empty")
        .max(200)
        .optional(),

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
}).refine(
    (data) => Object.keys(data).length > 0,
    {
        message: "At least one field is required to update a book",
    }
);

export type UpdateBookInput = z.infer<typeof updateBookSchema>;