"use client";

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;
      if (blob != null) {
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          {
            duration: 3000,
            fill: "forwards",
          }
        );
      }
    };
  }, []);

  return (
    <html lang="en" className="overflow-hidden scroll-smooth ">
      <head />
      <body className="h-screen bg-white">
        <div id="blob" className="invisible md:visible"></div>
        <div id="blur" className="invisible md:visible"></div>
        <div>{children}</div>
      </body>
    </html>
  );
}
