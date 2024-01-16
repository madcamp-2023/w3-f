"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Link({
  route,
  children,
}: {
  route: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <button
      className="pt-12 opacity-0 group-hover:opacity-100"
      onClick={() => router.push(route)}
    >
      <span className="border-b border-black p-2">{children}</span>
    </button>
  );
}
