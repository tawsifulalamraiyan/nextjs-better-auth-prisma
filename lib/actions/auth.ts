"use server";

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const SignUp = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  } catch (error) {
    // You can enhance this with useFormState later
    console.error("Signup error:", error);
    throw new Error("Signup failed");
  }

  redirect("/signin");
};

export const Signin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    console.error("Signin error:", error);
    throw new Error("Signin failed");
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
