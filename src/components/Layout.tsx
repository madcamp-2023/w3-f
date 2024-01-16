"use client";

import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div style={{ marginTop: "10vh" }}>{children}</div>
    </main>
  );
}
