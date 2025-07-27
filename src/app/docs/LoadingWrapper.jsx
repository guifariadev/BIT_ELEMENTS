"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SkeletonDocs from "@/components/content/Skeleton";

export default function LoadingWrapper({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return isLoading ? <SkeletonDocs /> : children;
}