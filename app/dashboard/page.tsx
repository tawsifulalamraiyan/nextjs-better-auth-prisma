import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <main className=" flex items-center justify-center min-h-screen">
        <Card className=" flex flex-col p-10">
          <div className=" flex items-start justify-start gap-20">
            <div>
              <h1>Dashboard</h1>
              <h1>Welcome {session.user.name}</h1>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default page;
