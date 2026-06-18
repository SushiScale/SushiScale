"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed
        bottom-0
        left-0
        right-0
        z-50
        md:hidden
        transition-all
        duration-300
        ${visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
        }
      `}
    >
      <div className="border-t border-slate-200 bg-white/90 p-4 backdrop-blur-xl">
        <a
          href="#booking"
          className="
            flex
            h-14
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-blue-600
            px-6
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:bg-blue-700
          "
        >
          Book Free Strategy Call →
        </a>
      </div>
    </div>
  );
}