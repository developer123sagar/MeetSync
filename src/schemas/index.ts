import * as z from "zod";

export const AuthSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export type AuthType = z.infer<typeof AuthSchema>;
