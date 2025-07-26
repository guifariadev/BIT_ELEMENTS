"use client";
import { cn } from "@/lib/utils";

export default function CardDemo() {
  return (
      <div
      className={cn(
        "group w-full rounded-lg cursor-pointer overflow-hidden absolute p-10 h-full",
        "before:bg-[url('/fffa.png')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
        "hover:bg-[url('/fffa.png')]",
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-80",
        "transition-all duration-500"
      )}>
        <div className="text relative z-50">
          <h3 className='text-5xl mb-1'>For Web developers</h3>
          <p className='text-zinc-400 text-xs'>Designed to streamline your workflow.</p>
        </div>
        
      </div>
  );
}
