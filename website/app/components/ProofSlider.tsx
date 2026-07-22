"use client";

import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { proofSliderItems } from "../lib/proof-slider-data";

type ProofSliderProps = {
  id?: string;
};

export function ProofSlider({ id = "arsip-bukti" }: ProofSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = proofSliderItems[activeIndex]!;

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? proofSliderItems.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % proofSliderItems.length);
  }

  return (
    <section className="proof-slider-section" id={id} aria-label="Arsip bukti pelanggan">
      <div className="proof-slider-heading">
        <div>
          <p className="eyebrow eyebrow-dark">HASIL ORDER &amp; TANGGAPAN PELANGGAN</p>
          <h2>Dari Hari Kartini sampai jersey dan repeat order.</h2>
        </div>
        <p>
          Setiap pesanan punya kebutuhan dan konteksnya sendiri. Pilih item
          untuk melihat hasil serta tanggapan pelanggan.
        </p>
      </div>

      <div className="proof-slider" aria-live="polite">
        <div className="proof-slider-stage">
          <img src={activeItem.image} alt={activeItem.alt} width="1170" height="1600" />
          <a
            className="proof-slider-expand"
            href={activeItem.image}
            target="_blank"
            rel="noreferrer"
            title="Buka bukti ukuran penuh"
            aria-label="Buka bukti ukuran penuh"
          >
            <Maximize2 size={20} aria-hidden="true" />
          </a>
        </div>

        <div className="proof-slider-caption">
          <p className="eyebrow eyebrow-dark">{activeItem.label}</p>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.context}</p>
          <span>
            Bukti {activeIndex + 1} dari {proofSliderItems.length}
          </span>
        </div>

        <div className="proof-slider-controls">
          <button type="button" onClick={showPrevious} aria-label="Bukti sebelumnya" title="Bukti sebelumnya">
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <div className="proof-slider-dots" aria-label="Pilih bukti">
            {proofSliderItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Tampilkan bukti ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                title={`Bukti ${index + 1}`}
              >
                <img src={item.image} alt="" aria-hidden="true" />
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label="Bukti berikutnya" title="Bukti berikutnya">
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
