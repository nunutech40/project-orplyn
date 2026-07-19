"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle } from "./Icons";

export function MobileQuoteCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");

    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <Link className="mobile-quote-cta" href="#quote">
      <MessageCircle size={20} aria-hidden="true" />
      Minta estimasi
    </Link>
  );
}
