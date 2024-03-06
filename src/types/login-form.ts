import * as z from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type TFormSchema = z.infer<typeof schema>;
