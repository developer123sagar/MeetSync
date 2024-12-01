"use server";

import bcryptjs from "bcryptjs";
import * as z from "zod";

import { AuthSchema } from "@/schemas";
import prisma from "@/utils/prisma";

export const auth = async (values: z.infer<typeof AuthSchema>) => {
  const validatedFields = AuthSchema.parse(values);

  if (!validatedFields) {
    return { error: "Invalid input" };
  }

  const { email, password } = validatedFields;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already exists" };
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send email verification token

  return { success: "User created successfully" };
};
