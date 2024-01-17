import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madcamp",
  description: "Madcamp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <Providers>
          <AnimatedCursor
            innerSize={25}
            outerSize={50}
            color="255, 0, 0"
            outerStyle={{ color: "black" }}
            outerAlpha={0.1}
            innerScale={0.7}
            outerScale={1.5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
