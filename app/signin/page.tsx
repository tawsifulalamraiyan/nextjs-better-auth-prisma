import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Signin } from "@/lib/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function SigninPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex items-center justify-center min-h-screen flex-col">
      <form action={Signin}>
        <Card className="p-10 space-y-4">
          <Input name="email" placeholder="Email address" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Sign in</Button>
          <p>
            You have no account? <Link href="/signup">Sign up</Link>
          </p>
        </Card>
      </form>
    </main>
  );
}
