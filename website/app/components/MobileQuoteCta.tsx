"use client";

import { useEffect, useState } from "react";
import { business } from "../lib/site-data";
import { WhatsAppQuickStart } from "./WhatsAppQuickStart";

type MobileQuoteCtaProps = {
  label?: string;
  placement?: string;
  heroSelector?: string;
  product?: string;
  useCase?: string;
};

export function MobileQuoteCta({
  label = "Chat order event / batch",
  placement = "mobile_sticky_batch",
  heroSelector = ".hero",
  product = "Kaos custom event / komunitas",
  useCase = "Event / komunitas",
}: MobileQuoteCtaProps = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(heroSelector);

    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroSelector]);

  if (!visible) return null;

  return (
    <WhatsAppQuickStart
      whatsappNumber={business.whatsapp}
      lane="batch"
      label={label}
      className="mobile-quote-cta"
      product={product}
      useCase={useCase}
      placement={placement}
    />
  );
}
