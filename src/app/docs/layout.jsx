"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DocsSidebar from "@/components/navs/DocsSidebar";
import DocsNavbar from "@/components/navs/DocsNavbar";
import SkeletonDocs from "@/components/content/Skeleton";

export default function DocsLayout({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <DocsNavbar />
      <div className="min-h-screen text-white max-w-7xl mx-auto">
        <DocsSidebar />
        <main className="flex-1 p-6 pl-1 md:pl-60">
          {isLoading ? <SkeletonDocs /> : children}
        </main>
      </div>
    </>
  );
}