"use client";
import { Suspense } from "react";
import SkeletonDocs from "@/components/content/Skeleton";

export default function LoadingWrapper({ children }) {
  return (
    <Suspense fallback={<SkeletonDocs />}>
      {children}
    </Suspense>
  );
}