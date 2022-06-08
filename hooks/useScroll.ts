import { useRef, useState } from "react";

export default function useScroll(offset = 0) {
  const [scrollDir, setScrollDir] = useState<"UP" | "DOWN">("UP");

  const handleScroll = () => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "DOWN" : "UP");
      lastScrollY = scrollY > offset ? scrollY : offset;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }
  return { handleScroll, scrollDir };
}
