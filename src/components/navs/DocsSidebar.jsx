"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { components } from "@/components/content/data/Components";

export default function DocsSidebar() {
  const pathname = usePathname();
  const grouped = components.reduce((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = [];
    acc[comp.category].push(comp);
    return acc;
  }, {});

  return (
    <aside className="fixed hidden md:block w-60 border-l border-border p-6 min-h-screen overflow-y-auto mt-20">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-sm font-semibold mb-2 uppercase text-zinc-500">
            {category}
          </h2>
          <ul className="space-y-1">
            {items.map((comp) => {
              const isActive = pathname === `/docs/${comp.slug}`;
              return (
                <li key={comp.slug}>
                  <Link
                    href={`/docs/${comp.slug}`}
                    className={`w-fit block px-2 py-1 text-sm rounded transition hover:bg-zinc-800 hover:translate-x-1 ${
                      isActive ? "text-white " : "text-zinc-400"
                    }`}
                  >
                    {comp.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
