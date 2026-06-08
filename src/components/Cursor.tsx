"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cur");
    const ring = document.getElementById("cur-ring");

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }

      if (ring) {
        ring.style.left = `${clientX}px`;
        ring.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cur"></div>
      <div id="cur-ring"></div>
    </>
  );
}