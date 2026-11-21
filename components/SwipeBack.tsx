"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Swipe from the left edge of the screen to go back (not on the home page).
export default function SwipeBack() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    const mountedAt = Date.now();
    let startX = 0;
    let startY = 0;
    let tracking = false;

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      tracking = t.clientX <= 40; // must begin at the left edge
      startX = t.clientX;
      startY = t.clientY;
    };

    const onEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      if (Date.now() - mountedAt < 600) return; // avoid double-triggering
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = Math.abs(t.clientY - startY);
      if (dx > 80 && dy < 70) {
        if (window.history.length > 1) router.back();
        else router.push("/");
      }
    };

    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [pathname, router]);

  return null;
}
