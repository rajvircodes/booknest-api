import { z } from "zod";

export const updateAuthorSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Author name cannot be empty")
        .max(150)
        .optional(),

    biography: z
        .string()
        .trim()
        .optional(),
}).refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required to update an author",
});

export type UpdateAuthorInput = z.infer<typeof updateAuthorSchema>;