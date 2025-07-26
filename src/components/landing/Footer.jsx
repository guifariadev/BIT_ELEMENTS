import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-full xl:h-[250px] border-t border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col xl:flex-row space-y-8 xl:space-y-0 px-10 xl:px-0 justify-between my-20 gap-4">
        <div>
          <h4 className="font-bold text-2xl mb-4">BitElements</h4>
          <p className="text-zinc-500 text-xs">
            @2025 BitElements. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Resources</h4>  
          <ul className="space-y-4">
            <Link href="/">
              <li className="text-zinc-400 text-sm transition hover:opacity-70 cursor-pointer">Docs</li>
            </Link>
            <li className="text-zinc-400 text-sm hover:opacity-70 cursor-pointer"> <a target="_blank" href="https://github.com">Github</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Feedback</h4>  
          <ul className="space-y-4">
            <li className="text-zinc-400 text-sm transition hover:opacity-70 cursor-pointer">Talk to us</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 