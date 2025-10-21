"use server";

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const SignUp = async ({ email, password, name }: any) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  } catch (error) {
    throw new Error("Signup failed: " + error);
  }
  redirect("/signin");
};

export const Signin = async ({ email, password }: any) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    throw new Error("Signup failed: " + error);
  }
  redirect("/dashboard");
};

export const Signout = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    console.error(error);
  }
  redirect("/signin");
};
