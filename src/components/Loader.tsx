"use client";

import { useEffect, useState } from "react";

export default function Loader() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="loader">
        <div className="loader-logo-wrap">
            <img src="/logo.png" alt="Logo" />
        </div>
        <div className="loader-progress"><div className="loader-fill"></div></div>
    </div>
  );
}