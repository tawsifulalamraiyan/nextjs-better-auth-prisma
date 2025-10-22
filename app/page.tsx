import { Button } from "@/components/ui/button";
import { Signout } from "@/lib/actions/auth";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/home");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center  p-10 text-white">
      <section className=" bg-neutral-900/70 max-w-md w-full  rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
        <p className="text-lg mb-6 text-gray-300">
          Hello, <span className="font-semibold">{session.user.email}</span>
        </p>

        {/* Sign out form */}
        <form action={Signout}>
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
          >
            Sign Out
          </Button>
        </form>
      </section>
    </main>
  );
}
