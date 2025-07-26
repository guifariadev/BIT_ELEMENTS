"use client";
import React from "react";
import Link from "next/link";
import ButtonExplore from "@/components/ui/ButtonExplore.jsx";
import { SiReact, SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const techs = [
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill className="text-blue-400" />,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion className="text-pink-400" />,
  },
  { name: "Three.js", icon: <TbBrandThreejs /> },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center z-20">
      <div className="max-w-3xl text-center space-y-3">
        <h1 className="font-bold text-4xl md:text-7xl text-white">
          Component{" "}
          <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text">
            Library
          </span>
        </h1>
        <h1 className="font-bold text-4xl md:text-7xl text-white">
          <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text">
            For
          </span>{" "}
          web developers
        </h1>
        <p className="text-zinc-300 mb-10 max-w-md md:max-w-full px-2">
          A curated set of reusable React components. Build sleek interfaces
          faster with modern and accessible UI blocks.
        </p>
        <Link href="/docs">
          <ButtonExplore text="Explore components" />
        </Link>
      </div>
      <div className="mt-30 space-y-6 flex flex-col items-center w-full">
        <h3 className="text-zinc-400 text-sm max-w-3xs md:max-w-full text-center">
          Featured using popular and the best tools in the market
        </h3>
        {/* MARQUEE CONTAINER */}
        <div className="flex overflow-hidden py-6">
          <div className="grid grid-cols-3 md:flex flex-shrink-0 gap-12">
            {[...techs].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white text-4xl min-w-[100px] hover:-translate-y-1 transition-all "
              >
                {tech.icon}
                <span className="text-xs mt-1 text-zinc-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
