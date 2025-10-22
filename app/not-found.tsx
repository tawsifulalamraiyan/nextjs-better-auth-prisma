"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import React from "react";

const Notfound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Classic meme emoji bounce */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-8xl mb-6"
      >
        🤷‍♂️😂
      </motion.div>

      {/* Meme style headline */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        Oops! This page took a day off. <br />
        You’re lost, buddy!
      </motion.h1>

      {/* Meme caption */}
      <p className="mb-10 max-w-lg text-neutral-400 text-lg leading-relaxed">
        Looks like you’re trying to find a page that’s as real as a unicorn
        riding a bike. 🦄🚴‍♂️ <br />
        Time to turn back before things get weirder.
      </p>

      {/* Meme-style CTA */}
      <Button
        onClick={() => redirect("/")}
        className="rounded-full px-8 py-6 text-xl   text-neutral-50 bg-transparent border  shadow-lg hover:bg-transparent hover:border-neutral-200 transition cursor-pointer"
      >
        Take me back home! 🏠💨
      </Button>
    </main>
  );
};

export default Notfound;
