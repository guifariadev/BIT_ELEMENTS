"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import CodeBlock from "../ui/CodeBlock";
import { components as allComponents } from "@/components/content/data/Components";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function About() {
  const [codes, setCodes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // load the first 2 components from data/components
  useEffect(() => {
    const loadCode = async () => {
      const selected = allComponents.slice(0, 2);
      const loaded = await Promise.all(
        selected.map(async (comp) => {
          const code = (
            await import(`@/components/content/demos/${comp.source}.jsx?raw`)
          ).default;
          return { title: comp.title, code };
        })
      );
      setCodes(loaded);
    };
    loadCode();
  }, []);

  // change between codes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % codes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [codes.length]);

  return (
    <section id="about" className="max-w-5xl mx-auto mb-30">
      <div className="flex flex-col xl:flex-row w-full items-center justify-center xl:justify-between">
        <div className="space-y-4 max-w-[400px] sm:max-w-[600px] xl:max-w-[450px] mb-10">
          <div className="bg-zinc-800 rounded-full px-3 py-2 w-fit flex items-center gap-1">
            <FaGithub className="text-xs" />
            <p className="text-xs">BitElements</p>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl">
            Stay ahead with cutting-edge components
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Build faster and smarter using the latest tools and modern design
            patterns in React development. Our components help you move faster
            and stay organized.
          </p>
          <Link href="/docs">
            <button
              className="bg-white text-black font-light hover:scale-95 py-2 px-6 transition-all
              ease-in-out duration-300 rounded-full cursor-pointer"
            >
              Browse components
            </button>
          </Link>
        </div>
        {/* CodeBlock */}
        <div className="xl:w-[50%]">
          <AnimatePresence mode="wait">
            {codes.length > 0 && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-2 text-xs text-zinc-400 font-mono px-2 py-1 bg-zinc-800 w-fit rounded-full">
                  {codes[activeIndex].title}
                </div>
                <div className="w-[400px] sm:w-[600px] xl:max-w-[500px]">
                  <CodeBlock
                    code={codes[activeIndex].code}
                    language="javascript"
                    customStyle={{
                      width: "100%",
                      height: "500px", 
                      overflow: "hidden",
                      borderRadius: "0.5rem",
                      padding: "1rem",
                      wordBreak: "break-word",
                      whiteSpace: "pre-wrap",
                      lineHeight: "1.4",
                      fontSize: "0.75rem",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
