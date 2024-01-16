"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function LinkButton({
  route,
  children,
}: {
  route: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return <button onClick={() => router.push(route)}>{children}</button>;
}
