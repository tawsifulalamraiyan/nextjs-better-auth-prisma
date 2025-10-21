import { Button } from "@/components/ui/button";
import { Signout } from "@/lib/actions/auth";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/signin");
  }

  return (
    <main className="p-10">
      <h1>Welcome to hello world, {session.user.email}</h1>

      {/* ✅ form that calls the Signout server action */}
      <form action={Signout}>
        <Button type="submit">Sign out</Button>
      </form>
    </main>
  );
}
