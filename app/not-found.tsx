"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { redirect } from "next/navigation";
import React from "react";

const Notfound = () => {
  return (
    <>
      <main className=" flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className=" text-4xl font-bold mb-7"
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
        >
          Opps sorry
        </motion.h1>
        <Button onClick={() => redirect("/")}>Go Home</Button>
      </main>
    </>
  );
};

export default Notfound;
