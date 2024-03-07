import * as z from "zod";

export const schema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type TFormSchema = z.infer<typeof schema>;
