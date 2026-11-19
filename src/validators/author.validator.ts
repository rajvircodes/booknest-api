import { z } from 'zod'

export const createAuthorSchema = z.object({
    name:z
    .string()
    .trim()
    .min(1, "Author name is required")
    .max(150),

    biography:z
    .string()
    .trim()
    .optional()
})

export type CreateAuthorInput = z.infer<typeof createAuthorSchema>;