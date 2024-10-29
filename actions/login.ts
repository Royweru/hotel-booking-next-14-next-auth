"use server";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const Login = async (vals: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(vals);

  if (!validatedFields.success) return { error: "Invalid Fields" };

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid Credentials",
          };
        default:
          return { error: "Something went wrong" };
      }
    }
  }
};
